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
import AdmissionForm from "../Componants/Pages/AdmissionForm";
import DocAppoint from "../Componants/Pages/DocAppoint";
import ProtectedRoute from "./ProtectedRoute";
import PtnDetails from "../Componants/Pages/PtnDetails";
import Profile from "../Componants/Auth/Profile";
import EditDetails from "../Componants/Pages/EditDetails";
import Academics from "../Componants/Pages/Academics";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<PNF />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path='department' element={<Department/>}/>
        <Route path='department/deptdetails/:id' element={<DeptDetails/>}/>
        <Route path='department/deptdetails/:id/doctordetails/:did' element={<DoctorDetails/>}/>
        
        <Route path='emergency-dept' element={<EmergencyDept/>}/>
        <Route path='academics' element={<Academics/>}/>
        
             
        <Route element={<ProtectedRoute/>}>  
        <Route path='admission' element={<AdmissionForm/>}/>
        <Route path='/doctor-appo/:appoid' element={<DocAppoint/>}/>
        <Route path="profile" element={<Profile/>}/>
        </Route> 
        <Route path='ptndetails' element={<PtnDetails/>}/>
        <Route path='ptndetails/editdetail/:id' element={<EditDetails/>}/>

        <Route path="login" element={<Login />}></Route>
        <Route path="signUp" element={<Reg />}></Route>
      
      </Routes>
      <Footer/>
    </>
  );
};

export default Routing;
