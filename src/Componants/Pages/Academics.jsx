import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Grid, Typography } from "@mui/material";
import '../../StyleComponants/Pages_style/Acadamic.css'
const Academics = () => {

let [acadademic,setAcademic]=useState([])

let academic_url="http://localhost:4000/academic"

let banner_url = " http://localhost:4000/image";
let [img, setImg] = useState([]);

useEffect(() => {
  axios
    .get(banner_url)
    .then((res) => {
      // console.log("The banner ", res.data);
      setImg(res.data);
    })
    .catch((err) => {
      // console.log("banner dont fetch", err);
    });
}, [banner_url]);

let fetchAcademic=()=>{
    axios.get(academic_url)
    .then(res=>{
        // console.log("fetch academic",res.data);
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
    <Box id="dep-banner">
        <Container>
          <Box>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography style={{textShadow:'0px 5px 8px black'}} id="dep-intro">
                  Academics
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
        {img.map((post) => (
          <React.Fragment key={post.id}>
            <img src={post.banner.depatbanner} alt="" id="d-banner" />
          </React.Fragment>
        ))}
      </Box>

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
            padding:'5%'
          }}
       key={post.id} >
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <img
                src={post.deptbanner}
                alt=""
               id='aca-img'
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
                  <span style={{fontWeight:"600"}}>Type course:</span>{post.Type_course}
                  <br/>
                  <span style={{fontWeight:"600"}}> Duration Training :</span> {post.Duration_Training}
                  <br/>
                  <span style={{fontWeight:"600"}}>Eligibility:</span> {post.Eligibility}
                  <br/>
                  <span style={{fontWeight:"600"}}> Total seat:</span> {post.Total_seat}
                  <br/>
                  <span style={{fontWeight:"600"}}>Session starts:</span>{post.Session_starts}
                  <br/>
                  <span style={{fontWeight:"600"}}> Course Director at S&S:</span>{post.Course_Director_at_AMRI}
                  <br/>
                  <span style={{fontWeight:"600"}}>Course coordinator at S&S:</span>{post.Course_coordinator_at_AMRI}

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