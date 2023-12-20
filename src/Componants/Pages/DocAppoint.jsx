import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Grid, Paper, TextField, Button } from "@mui/material";

import axios from "axios";
import { LocalLaundryService } from "@mui/icons-material";

const DocAppoint = () => {
  let vaild_email = window.sessionStorage.getItem("email");
  // console.log(valid_email);

  let { did,appoid } = useParams();
  console.log("doctor id",appoid);
  let navigate=useNavigate("/")
  
  let depart_url = " http://localhost:4000/doctors";

  let [fetchDoc, setDoc] = useState({
    doctorname: "",
    
  });
  // useEffect(() => {
  //   axios
  //     .get(depart_url)
  //     .then((res) => {
  //         setDoc(res.data)
  //         console.log(res.data);
  //         // let doc = res.data.consultant.find((data) => data.docid == appoid);
  //         // console.log(doc);

  //     })
  //     .catch((err) => {
  //       // console.log("Doctor dont fetch", err);
  //     });
  // }, []);
 
 let user_api="http://localhost:4000/users"

  let [ptnDetail, setPtnDetail] = useState({
    pname:"",
    padd: "",
    pmail: vaild_email,
    pno: "",
    docname: "",
    date: "",
    time: "",
  });
let changeDateTime =(event)=>{
  const setdate = event.target.value.toString().split("-");
  //  console.log(setdate);
  const Year = setdate[0];
  //  console.log(Year);
  const Month = setdate[1];
  //  console.log(Month);
  const Day = setdate[2].slice(0, -6);
  //  console.log(Day);
  const changeDateformate = Day + "-" + Month + "-" + Year;
  // console.log(changeDateformate);

  const changeTime = setdate[2].slice(3);
  // console.log(Time);

  setPtnDetail({ ...ptnDetail,date:changeDateformate,time:changeTime})
}
  let changehandle = (event) => {
    let { name, value } = event.target;
    // console.log(name,value);
    setPtnDetail({...ptnDetail,[name]: value});
  };

  let submitdata = (event) => {
    event.preventDefault();
    console.log("the form value", ptnDetail);

    let userdata={
      ptname: ptnDetail.pname,
      padd:ptnDetail.padd ,
      pmail:ptnDetail.pmail,
      pno:ptnDetail.ptnDetail ,
      docname:ptnDetail.docname ,
      date:ptnDetail.date ,
      time:ptnDetail.time ,
    }
    axios.post(user_api,userdata)
    .then(res=>{
    console.log("data registered",res);
      alert("patient appointment done")
      navigate("/")
      
    })
    .catch(err=>{
      console.log("data not registered");
    })
  
  
  };

    

    
      
    


  

  return (
    <>
      <h1>Doctor appointment form</h1>
      <Box id="app-form">
        <h2>Appointment Form</h2>
        <form onSubmit={submitdata}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                label="Patient Name"
                variant="outlined"
                fullWidth
                name="pname"
                onChange={changehandle}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                name="padd"
                onChange={changehandle}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="pmail"
                value={vaild_email}
                onChange={changehandle}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="pno"
                onChange={changehandle}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Doctor Name"
                variant="outlined"
                fullWidth
                
                name="docname"
                onChange={changehandle}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                type="datetime-local"
                name="date"
                onChange={changeDateTime}
                fullWidth
                id="date"
              />
            </Grid>
            <Box></Box>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginBottom: 10 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default DocAppoint;
