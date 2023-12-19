import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Container, Grid, Paper, TextField,Button } from "@mui/material";


const DocAppoint = () => {

let vaild_email=window.sessionStorage.getItem('email')
// console.log(valid_email);

let {did}=useParams();
console.log("doctor id",did);


const [selectedDateTime, handleDateTimeChange] = useState(null);

let [ptnDetail, setPtnDetail] = useState({
  pname: "",
  padd: "",
  pmail: vaild_email,
  pno: "",
  docname:"",
  dt:""
  
});

let changehandle=(event)=>{
  let { name, value } = event.target;
  // console.log(name,value);
  setPtnDetail({ ...ptnDetail, [name]: value });
  
};

let submitdata=(event)=>{
  event.preventDefault();
  console.log("the form value", ptnDetail);
}

  return (
    <div>
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
                    
                    </Grid>
                    <Grid item xs={12}>
                     <Button 
                     type="submit"
                     variant="contained"
                     color="primary"
                     >
                      Doctor Appointment confirm
                     </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            
    </div>
  )
}

export default DocAppoint