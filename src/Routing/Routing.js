import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Home from "../Componants/Pages/Home";
import PNF from "../Componants/Common/PNF";
import Login from "../Componants/Auth/Login";
import Reg from "../Componants/Auth/Reg";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<PNF />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signUp" element={<Reg />}></Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default Routing;
