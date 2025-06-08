import Header from "./Components/Header";
import Item from "./Components/Item";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path=""/>
        <Route path="/login" element ={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
