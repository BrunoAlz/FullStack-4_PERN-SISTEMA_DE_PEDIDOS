import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.scss'
import logoImg from '../../public/logo.svg'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


export default function Home() {
  return (
    <>
      <Head>
        <title>Dog-Pedidos | Fazer Login</title>
      </Head>
      <div className={style.containerCenter}>
        <Image src={logoImg} alt={'LogoDogzera'} />

        <div className={style.login}>
          <form>
            <Input placeholder='Digite seu Email' type='text' />
            <Input placeholder='Digite sua Senha' type='password' />
            <Button type="button" loading={false}>
              Entrar
            </Button>
          </form>

          <a className={style.text}>
            Não é registrado? Cadastre-se
          </a>
        </div>
      </div>
    </>
  )
}
