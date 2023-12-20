import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Paper, TextField, Button } from "@mui/material";
import { format, parseISO } from "date-fns";
import axios from "axios";

const DocAppoint = () => {
  let vaild_email = window.sessionStorage.getItem("email");
  // console.log(valid_email);

  let { did } = useParams();
  console.log("doctor id", did);
  
 
 

  let [ptnDetail, setPtnDetail] = useState({
    pname: "",
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
                // value={vaild_email}
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
