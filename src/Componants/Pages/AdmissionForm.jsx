import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { Description } from "@mui/icons-material";

const AdmissionForm = () => {

let user_email = window.sessionStorage.getItem("email");
  
  
 
  

  let [ptnData, setPtnData] = useState({
    pname: "",
    gname: "",
    email: user_email,
    pnum: "",
    reason: "",
    page:"",
    add: "",
    
  });

  const [age, setAge] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };


  let changeHandle = (event) => {
    let { name, value } = event.target;
    setPtnData({ ...ptnData, [name]: value });
    setAge(event.target.value);
   
  };

  let admission_url="http://localhost:4000/admission";

  let submitHaldle = (event) => {
    event.preventDefault();
    console.log("the patient data is", ptnData);

    let admission_data={
    pname:ptnData.pname ,
    gname: ptnData.gname,
    email: ptnData.email,
    pnum: ptnData.pnum,
    reason: ptnData.reason,
    page:ptnData.page,
    add: ptnData.add,
    }

    axios.post(admission_url,admission_data)
    .then(res=>{
      console.log("patient admission data",res.data);
      alert("patient appointed")
      setPtnData(res.data)
    })
    .catch(err=>{
      console.log("err",err);
    })

  };

  return (
    <div>
      <Container>
        
       <Box> 
        <Grid container spacing={2}>
          <Grid item md={6}>
            <img src="Assets/img/admission_form.png" alt="" srcset="" width="100%"/>
          </Grid>
          
          <Grid item md={6}>
          <h2 align="center">Patient Admission Form</h2>
          <form onSubmit={submitHaldle}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Patient Name"
                  variant="outlined"
                  fullWidth
                  name="pname"
                  onChange={changeHandle}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Guardian Name"
                  variant="outlined"
                  fullWidth
                  name="gname"
                  onChange={changeHandle}
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={user_email}
                  onChange={changeHandle}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  name="pnum"
                  onChange={changeHandle}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
              <InputLabel id="demo-simple-select-label">Reason</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    name="reason"
    onChange={changeHandle}
  >
    <MenuItem value={10}>Operative</MenuItem>
    <MenuItem value={20}>Emergency</MenuItem>
    <MenuItem value={30}>Metarnity</MenuItem>
    <MenuItem value={40}>Chronic Desease</MenuItem>
  </Select>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Age"
                  variant="outlined"
                  fullWidth
                  name="page"
                  onChange={changeHandle}
                />
              </Grid>
              
              <Grid xs={12} item>
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  name="add"
                  onChange={changeHandle}
                />
              </Grid>

              
              

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Admission Booked{" "}
                </Button>
              </Grid>
            </Grid>
          </form>
          </Grid>
          
        </Grid> 
      </Box>
          
        
      </Container>
    </div>
  );
};

export default AdmissionForm;
