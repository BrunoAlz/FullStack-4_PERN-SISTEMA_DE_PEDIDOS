import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie } from 'nookies'
import Router from "next/router";
import { api } from "@/services/apiClient";
import { toast } from 'react-toastify';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    singIn: (credentials: SingInProps) => Promise<void>
    singUp: (credentials: SingUpProps) => Promise<void>
    singOut: () => void;

}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SingInProps = {
    email: string;
    password: string;
}

type SingUpProps = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}


type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function singOut() {
    try {
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    } catch (error) {
        console.log("ERRO AO DESLOGAR");
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    async function singIn({ email, password }: SingInProps) {

        const response = await api.post('/auth/login', {
            email,
            password
        })

        const { id, name, token } = response.data

        if (!token) {
            toast.error(response.data.error);
        } else {
            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 25 * 30,
                path: "/"
            })

            setUser({
                id: id,
                name: name,
                email: email
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            Router.push('/dashboard')
            toast.success(`Bem vindo! ${name}`);
        }
    }

    async function singUp({ name, email, password, confirmPassword }: SingUpProps) {
   
        const response = await api.post('/user/create', {
            name,
            email,
            password,
            confirmPassword
        })

        console.log(response)

    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, singIn, singOut, singUp }}>
            {children}
        </AuthContext.Provider>
    )
}