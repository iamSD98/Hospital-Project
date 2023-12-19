import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Container, Grid, Paper, TextField,Button } from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

const DocAppoint = () => {

let {did}=useParams();
console.log("doctor id",did);

const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

let [ptnDetail, setPtnDetail] = useState({
  pname: "",
  padd: "",
  pmail: "",
  pno: "",
  docname:"",
  dt:""
  
});

let changehandle=(event)=>{
  let { name, value } = event.target;
  // console.log(name,value);
  setPtnDetail({ ...ptnDetail, [name]: value });
   setValue({...value,[name]:value})
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker label="Basic date time picker" />
                    </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                     <Button 
                     type="submit"
                     variant="contained"
                     color="primary"
                     >
                      Doctor Appointment confirm{" "}
                     </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            
    </div>
  )
}

export default DocAppoint