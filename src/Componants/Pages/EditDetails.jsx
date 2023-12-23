import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Grid, Paper, TextField, Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import axios from "axios";

const EditDetails = () => {
    let {eid}=useParams();

let [editDetail,setDetail]=useState({ docname:"",date:"",time:""})

let changehandle=(event)=>{
let {name,value}=event.target
}
// let changeDateTime =(event)=>{
//     const setdate = event.target.value.toString().split("-");
//     //  console.log(setdate);
//     const Year = setdate[0];
//     //  console.log(Year);
//     const Month = setdate[1];
//     //  console.log(Month);
//     const Day = setdate[2].slice(0, -6);
//     //  console.log(Day);
//     const changeDateformate = Day + "-" + Month + "-" + Year;
//     // console.log(changeDateformate);
  
//     const changeTime = setdate[2].slice(3);
//     // console.log(Time);
  
//     setPtnDetail({ ...ptnDetail,date:changeDateformate,time:changeTime})
//   }



  return (
    <div>
        <h1>EditDetails</h1>
        <Container>
            <Box>
            <form >
          <Grid container spacing={2}>
           
           <Grid item md={6}>
              <TextField
                label="Doctor Name"
                variant="outlined"
                fullWidth
                // value={appoid}
                name="docname"
                readOnly
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                type="datetime-local"
                name="date"
                // onChange={changeDateTime}
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
        </Container>
    </div>
  )
}

export default EditDetails