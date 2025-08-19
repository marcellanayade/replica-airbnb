import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">

      <div className="max-[450px]:px-4 w-full mx-auto flex flex-col items-center  max-w-96  gap-4">

        <h1 className="text-2xl font-bold">Faça seu login</h1>
        <form className="w-full flex flex-col gap-2" action="">
            <input type="email" placeholder="Digite seu email" className="w-full rounded-full border border-gray-300 py-2 px-4" />
            <input type="password" placeholder="Digite sua senha"className="w-full rounded-full border border-gray-300 py-2 px-4" />
            <button className="cursor-pointer bg-primary-400 text-white font-bold w-full rounded-full border border-gray-300 py-2 px-4">Entrar</button>
        </form>
        <p>Ainda não tem conta? <Link to="/register" className="underline font-semibold">Registre-se aqui!</Link></p>

      </div>

    </section>
  );
};

export default Login;
