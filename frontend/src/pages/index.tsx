import { FormEvent, useContext, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.scss'
import logoImg from '../../public/logo.svg'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { AuthContext } from '@/contexts/AuthContext'

import Link from 'next/link'

export default function Home() {
  const { singIn } = useContext(AuthContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '') {
      return;
    }

    setLoading(true);

    let data = {
      email,
      password
    }
    await singIn(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Dog-Pedidos | Fazer Login</title>
      </Head>
      <div className={style.containerCenter}>
        <Image src={logoImg} alt={'LogoDogzera'} />

        <div className={style.login}>
          <form onSubmit={handleLogin}>

            <Input
              placeholder='Digite seu Email'
              type='text' value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <Input
              placeholder='Digite sua Senha'
              type='password'
              onChange={(e) => setPassword(e.target.value)} />

            <Button type="submit" loading={loading}>
              Entrar
            </Button>
          </form>

          <Link href="/singup">
            <p className={style.text}>
              Não é registrado? Cadastre-se
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}
