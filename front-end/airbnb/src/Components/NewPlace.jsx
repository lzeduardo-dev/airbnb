import React from "react";
import { useState } from "react";
import { Perks } from "./Perks";
const NewPlace = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [extra, setExtra] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6 px-8 ">
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className=" ml-2 font-bold text-2xl">
          Título
        </label>
        <input
          type="text"
          id="title"
          placeholder="Digite o título do seu anúncio"
          className="flex border-gray-300 border-1 rounded-full px-4 py-2 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="address" className=" ml-2 font-bold text-2xl ">
          Cidade e País
        </label>
        <input
          type="text"
          id="address"
          placeholder="Digite a cidade e o país do seu anúncio"
          className="flex border-gray-300 border-1 rounded-full px-4 py-2 "
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className=" ml-2 font-bold text-2xl ">Fotos</label>

        <div className="flex gap-2">
          <input
            type="text"
            id="photos"
            placeholder="Envie suas fotos"
            className="border-gray-300 border-1 rounded-full px-4 py-2 grow"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button className="bg-gray-100 font-bold rounded-full px-4 py-2 hover:bg-gray-200 cursor-pointer">
            Enviar foto
          </button>
        </div>

        <div className="mt-2 grid grid-cols-5 gap-4">
          <label
            htmlFor="file"
            className="flex aspect-square cursor-pointer items-center justify-center gap-2 rounded-2xl border border-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            upload
          </label>
          <input type="file" id="file" className="hidden" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className=" ml-2 font-bold text-2xl ">Descrição</label>
        <textarea
          type="text"
          id="description"
          placeholder="Coloque aqui a descrição do seu anúncio"
          className="h-40 rounded-2xl border border-gray-300 px-4 py-2 resize-none text-left"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Perks />

      <div className="flex flex-col gap-1">
        <label className=" ml-2 font-bold text-2xl ">Informações Extras</label>
        <textarea
          type="extra"
          id="description"
          placeholder="Coloque aqui a descrição do seu anúncio"
          className="h-40 rounded-2xl border border-gray-300 px-4 py-2 resize-none text-left"
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Restrições e Preços</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-bold" htmlFor="price">
              Preço
            </label>
            <input
              type="number"
              id="price"
              placeholder="500"
              className=" border-gray-300 border-1 rounded-full px-4 py-2 "
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-bold" htmlFor="price">
              Checkin
            </label>
            <input
              type="number"
              id="checkin"
              placeholder="16:00"
              className=" border-gray-300 border-1 rounded-full px-4 py-2 "
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-bold" htmlFor="price">
              Checkout
            </label>
            <input
              type="number"
              id="checkout"
              placeholder="21:00"
              className=" border-gray-300 border-1 rounded-full px-4 py-2 "
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 font-bold">
            <label className="text-lg" htmlFor="price">
              Nº de convidados
            </label>
            <input
              type="number"
              id="price"
              placeholder="10"
              className=" border-gray-300 border-1 rounded-full px-4 py-2 "
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button className="w-full rounded-full text-white px-4 py-2 items-center bg-rose-500 hover:bg-rose-600">
        Salvar informações
      </button>
    </form>
  );
};

export default NewPlace;
