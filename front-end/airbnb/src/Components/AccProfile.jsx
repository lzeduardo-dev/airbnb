import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";

const AccProfile = () => {
  const { user, setUser } = useContext(UserContext); 
  const [redirect, setRedirect] = useState(false);

  const logout = async () => {
    try {
      const { data } = await axios.post("/users/logout");
      console.log(data);
      setUser(null);
      setRedirect(true);
    } catch (error) {
      throw error;
    }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="mt-5">
        Logado como {user?.name} ({user?.email})
      </p>
      <button
        onClick={logout}
        className="min-w-44 bg-rose-500 rounded-full py-2 px-4 text-white font-bold cursor-pointer my-3"
      >
        Logout
      </button>
    </div>
  );
};

export default AccProfile;
