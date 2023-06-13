import Head from 'next/head'
import Image from 'next/image'
import style from '../../styles/Home.module.scss'
import logoImg from '../../../public/logo.svg'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import Link from 'next/link'

export default function Singup() {
    return (
        <>
            <Head>
                <title>Dog-Pedidos | Cadastrar</title>
            </Head>
            <div className={style.containerCenter}>
                <Image src={logoImg} alt={'LogoDogzera'} />

                <div className={style.login}>

                    <h1>Criar conta</h1>

                    <form>
                        <Input placeholder='Digite seu Nome' type='text' />
                        <Input placeholder='Digite seu Email' type='text' />
                        <Input placeholder='Digite sua Senha' type='password' />
                        <Button type="button" loading={false}>
                            Cadastrar
                        </Button>
                    </form>

                    <Link href="/">
                        <p className={style.text}>
                            Já possui uma conta? faça login!
                        </p>
                    </Link>
                </div>
            </div>
        </>
    )
}
