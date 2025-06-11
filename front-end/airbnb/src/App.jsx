import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import axios from "axios";
import Register from "./Pages/Register";
import Account from "./Pages/Account";
import { UserContext } from "../Contexts/UserContext";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get("/users/profile");
      setUser(data);
    };
    axiosGet();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/account/:subpage?" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
} 

export default App;
