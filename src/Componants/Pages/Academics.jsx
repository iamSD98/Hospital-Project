import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Grid, Typography,TextField,Button } from "@mui/material";

import { Link } from "react-router-dom";

const Academics = () => {

let [acadademic,setAcademic]=useState([])

let academic_url="http://localhost:4000/academic"

let fetchAcademic=()=>{
    axios.get(academic_url)
    .then(res=>{
        console.log("fetch academic",res.data);
        setAcademic(res.data)
    })
    .catch(err=>{
        console.log("dont fetch data",err);
    })

}

useEffect(()=>{
fetchAcademic();
},[])




  return (
    <>
        <h1>Academics</h1>
        <Container>
            {
                acadademic.map((post)=>(
            
        <Box
          sx={{
            maxWidth: "100%",
            borderRadius: "20px",
            marginBottom: 8,
            marginTop: 8,
            boxShadow: "0px 5px 10px black",
          }}
       key={post.id} >
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <img
                src={post.deptbanner}
                
                alt=""
                id="doc-img"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ fontFamily: "kanit" }}
                >
                  
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ paddingBottom: "30px", fontFamily: "kanit" }}
                >
                  <h1>{post.course_name}</h1>
                  <br/>
                  Type_course:{post.Type_course}
                  <br/>
                  Duration_Training:{post.Duration_Training}
                  <br/>
                  Eligibility:{post.Eligibility}
                  <br/>
                    Total_seat:{post.Total_seat}
                  <br/>
                  Session_starts:{post.Session_starts}
                  <br/>
                  Course_Director_at_AMRI:{post.Course_Director_at_AMRI}
                  <br/>
                  Course_coordinator_at_AMRI:{post.Course_coordinator_at_AMRI}

                </Typography>
                
              </Box>
            </Grid>
          </Grid>
        </Box>
            ))
            }
       
      </Container>
    </>
  )
}

export default Academics