import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Grid, Paper, TextField, Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../../StyleComponants/Pages_style/DocAppoint.css'
import axios from "axios";
import { LocalLaundryService } from "@mui/icons-material";

const DocAppoint = () => {
  let user_email = window.sessionStorage.getItem("email");
  let user_Firstname= window.sessionStorage.getItem("fname");
  let user_Lastname = window.sessionStorage.getItem("lname");
  // console.log(valid_email);

  let { did,appoid } = useParams();
  console.log("doctor id",appoid,did);
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
    pfname:user_Firstname,
    plname:user_Lastname,
    padd: "",
    pmail: user_email,
    pgen:"",
    page:"",
    pno: "",
    docname: appoid,
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
      pfname: ptnDetail.pfname,
      plname:ptnDetail.plname,
      padd:ptnDetail.padd ,
      pmail:ptnDetail.pmail,
      pgen:ptnDetail.pgen,
      page:ptnDetail.page,
      pno:ptnDetail.pno ,
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
      
      <Box id="app-form">
        <h2 style={{textAlign:'center'}}>Appointment Form</h2>
        <form onSubmit={submitdata}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                name="pfname"
                value={user_Firstname}
                onChange={changehandle}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                name="plname"
                value={user_Lastname}
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
                value={user_email}
                onChange={changehandle}
              />
            </Grid>
           
            <Grid item md={6}>
            <FormControl onChange={changehandle} name='pgen'>
      <FormLabel id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="pgen"
      >
        <FormControlLabel  value="female" control={<Radio />} label="Female" />
        <FormControlLabel  value="male" control={<Radio />} label="Male" />
       
      </RadioGroup>
    </FormControl>
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Phone Number"
                type="tel"
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
                value={appoid}
                name="docname"
                readOnly
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
            sx={{ marginBottom: 2,marginTop:5 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default DocAppoint;
