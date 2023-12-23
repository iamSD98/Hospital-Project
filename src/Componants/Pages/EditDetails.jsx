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
  let navigate = useNavigate()
    let{id}=useParams();
    console.log('rec',id);

    
    let [ptnDetail,setPtnDetail]=useState({docname:'',date:'',time:'',age:'',id:0});
    let user_api="http://localhost:4000/users"
    
    
    let fetchPtn=()=>{
      axios.get(`${user_api}/${id}`)
      .then(res=>{
          setPtnDetail(res.data)
          console.log("user fetch",res.data);
      })
      .catch(err=>{
          console.log("usrr not ffetch",err);
      })
    }
    
        useEffect(()=>{
          fetchPtn();  
        },[setPtnDetail])

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
const handleSubmit=(event)=>{
  event.preventDefault()
  axios.put(`${user_api}/${id}`,ptnDetail)
  .then((res)=>{
    alert("Data Updated Successful")
    console.log("Updated responce",res.data);
    navigate('/ptndetails')
  })
  .catch((err)=>{
    alert("Data not updated")
    console.log("Updated Error",err);
  })
 
}
let updateDateTime =(event)=>{
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

  setPtnDetail((prev)=>({...prev,date:changeDateformate,time:changeTime}))
}

  return (
    <div>
        <h1>EditDetails</h1>
        <Container>
            <Box>
            <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
           
           <Grid item md={6}>
              <TextField
                label="Doctor Name"
                value={ptnDetail.docname}
                variant="outlined"
                fullWidth
                onChange={(event)=>
                  setPtnDetail((prev)=>({...prev,docname:event.target.value}))}
                name="docname" 
              />
            </Grid>
            
            <Grid item md={6}>
              <TextField
                type="datetime-local"
                name="date"
                onChange={updateDateTime}
                fullWidth
                id="date"
              />
            </Grid>

            

      
           
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