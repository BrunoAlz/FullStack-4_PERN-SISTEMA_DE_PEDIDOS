import { FormEvent, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import style from "../../styles/Home.module.scss";
import logoImg from "../../../public/logo.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { toast } from "react-toastify";

export default function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSingUp(event: FormEvent) {
    event.preventDefault();

    if (name === '' || email === '' || password === '') {
      toast.error("Preencha todos os campos");
      return;
    }

    setLoading(true)
  }

  return (
    <>
      <Head>
        <title>Dog-Pedidos | Cadastrar</title>
      </Head>
      <div className={style.containerCenter}>
        <Image src={logoImg} alt={"LogoDogzera"} />

        <div className={style.login}>
          <h1>Criar conta</h1>

          <form onSubmit={handleSingUp}>
            <Input
              placeholder="Digite seu Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Digite seu Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <Input
              placeholder="Digite sua Senha"
              type="password" value={password}
              onChange={(e) => setPassword(e.target.value)} />

            <Button type="submit" loading={loading}>
              Cadastrar
            </Button>
          </form>

          <Link href="/">
            <p className={style.text}>Já possui uma conta? faça login!</p>
          </Link>
        </div>
      </div>
    </>
  );
}
