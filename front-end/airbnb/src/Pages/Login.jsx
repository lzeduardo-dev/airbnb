import { useState } from "react";
import { Navigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });
        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`Deu um erro ao logar: ${error.response.data}`);
      }
    } else {
      alert("você precisa preencher o e-mail e a senha!");
    }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto max-w-96 flex flex-col gap-4 p-8 items-center my-20">
        <h1 className="font-bold text-3xl">Faça seu login</h1>
        <form
          action=""
          className="flex flex-col w-full gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 py-3 pr-4 pl-6 shadow-md"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-300 py-3 pr-4 pl-6 shadow-md"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="rounded-full w-full py-2 px-4 bg-rose-500 text-neutral-50 hover:cursor-pointer">
            Login
          </button>
        </form>
        <p className="">
          Ainda não tem uma conta?
          <Link to="/register">
            <span className="underline">Registre-se aqui!</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
