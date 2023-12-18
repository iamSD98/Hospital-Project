import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Home from "../Componants/Pages/Home";
import PNF from "../Componants/Common/PNF";
import Login from "../Componants/Auth/Login";
import Reg from "../Componants/Auth/Reg";
import Department from "../Componants/Pages/Department";
import DeptDetails from "../Componants/Pages/DeptDetails";
import DoctorDetails from "../Componants/Pages/DoctorDetails";
import EmergencyDept from "../Componants/Pages/EmergencyDept";
import Career from "../Componants/Pages/Career";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<PNF />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path='department-page' element={<Department/>}/>
        <Route path='department-page/deptdetails-page/:id' element={<DeptDetails/>}/>
        <Route path='department-page/deptdetails-page/:id/doctordetails-page/:did' element={<DoctorDetails/>}/>
        <Route path='emergency-dept-page' element={<EmergencyDept/>}/>
        <Route path='academics' element={<Career/>}/>
        <Route path="login" element={<Login />}></Route>
        <Route path="signUp" element={<Reg />}></Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default Routing;
