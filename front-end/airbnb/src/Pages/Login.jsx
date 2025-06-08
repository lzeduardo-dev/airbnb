import React from "react";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto max-w-96 flex flex-col gap-4 p-8 items-center my-20">
        <h1 className="font-bold text-3xl">Faça seu login</h1>
        <form action="" className="flex flex-col w-full gap-6">
          <input
            type="email"
            className="w-full  rounded-full border border-gray-300 py-4 pr-4 pl-6 shadow-md"
            placeholder="Digite seu email"
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-300 py-4 pr-4 pl-6 shadow-md"
            placeholder="Insira sua senha"
          />
          <button className="rounded-full w-full py-4 px-4 bg-rose-500 text-neutral-50 hover:cursor-pointer">
            Login
          </button>
        </form>
        <p className="">
          Ainda não tem uma conta?
          <span className="underline">Registre-se aqui!</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
