import React from "react";

const Item = () => {
  return (
    <div className="flex flex-col gap-2">
      <img
        src="https://a0.muscache.com/im/pictures/airflow/Hosting-17601557/original/c9c958f1-6cbb-44ea-8c2c-5c15eb922ca3.jpg?im_w=720"
        alt="Imagem da acomodação"
        className="rounded-lg"
      />
      <h3 className="font-bold">Cabo Frio, Rio de Janeiro</h3>
      <p className="truncate text-gray-600 ">
        Cobertura, duplex, em frente a praia das Dunas, Cabo Frio. As trêsAdd
        commentMore actions suítes com ar condicionado. TV na suíte master e
        sala, com sky na sala. Cozinha equipada. Wi-fi de 120mbs da Vivo Fibra.
        Piscina e churrasqueira privativas. Estacionamento para dois carros
        dentro do prédio. Com uma área externa com vista panorâmica da praia das
        Dunas. O espaço Cobertura duplex em frente a praia das Dunas, em Cabo
        Frio. O apartamento conta com três suítes e mais um banheiro social,
        piscina e churrasqueira privativas, com uma área externa com vista
        panorâmica daAdd commentMore actions praia das Dunas. Bairro calmo. Na
        rua lateral você encontra uma padaria que oferece café da manhã e alguns
        restaurantes. 3-5min da Praia do Forte (indo de carro). Cobertura fica
        no 4º andar.
      </p>
      <p><span className="">R$ 550</span> por noite</p>
    </div>
  );
};

export default Item;
