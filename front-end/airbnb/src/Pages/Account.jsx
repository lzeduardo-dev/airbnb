import React from "react";
import { useParams } from "react-router-dom";
import AccProfile from "../Components/AccProfile";
import { Link } from "react-router-dom";


const Account = ({ user }) => {
  const { subpage } = useParams();

  const buttonClass = (button) => {
    let finalClass =
      "hover:bg-rose-500 cursor-pointer rounded-full w-full px-4 py-2 transition hover:text-white";

    if (button === subpage) {
      finalClass += " bg-rose-500 text-white";
    }

    return finalClass;
  };

  return (
    <section className="p-8">
      <div className="mx-auto flex flex-col max-w-7xl items-center gap-4">
        <div className="flex gap-4">
          <Link to="/account/profile">
            <button className={buttonClass("profile")}>Perfil</button>
          </Link>
          <Link to="/account/bookings">
            <button className={buttonClass("bookings")}>Reservas</button>
          </Link>
          <Link to="/account/places">
            <button className={buttonClass("places")}>Lugares</button>
          </Link>
        </div>
      </div>

      {subpage === "profile" && <AccProfile user={user}/>}
    </section>
  );
};

export default Account;
