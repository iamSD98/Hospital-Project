import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import '../../StyleComponants/Pages_style/Department.css'
import { Container} from "@mui/material";

const EmergencyDept = () => {

    
    let emgcy_url ="http://localhost:4000/emergencyDept";

    let [fetchEmgcy,setEmgcy]=useState([])

    useEffect(()=>{
        axios.get(emgcy_url)
        .then((res)=>{
            console.log("emergency data fetch",res.data);
            setEmgcy(res.data)
        })
        .catch(err=>{
            console.log("Data not fetch ",err);
        })
    },[])





  return (
    <>
        <h1>EmergencyDept</h1>
        <Box id="dep-banner">
        <Container>
          <Box>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography id="dep-intro">
                  <h5 style={{textShadow:'0px 5px 8px black'}}>Department</h5>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
         </Box>

         <Container maxWidth='x1'>
         <Box id="dep-wrapper" sx={{display:{md:'flex',xs:'none'}}}>
          <Container>
            
            <Grid container spacing={6} >
              {fetchEmgcy.map((post) => (
                <Grid item md={4} key={post.id} >
                  <Card
                    sx={{
                      maxWidth:'100%',
                      borderRadius: "20px",
                      boxShadow: "0px 5px 10px black",
                      marginTop:10,
                      marginBottom:10,
                      backgroundPosition:'center',
                      backgroundSize:'cover'
                    }}
                  >
                    <CardMedia
                      sx={{ height: 330 }}
                      image={post.deptbanner}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.department}
                      </Typography>
                      <Typography variant="body3" color="text.secondary">
                       
                      </Typography>
                    </CardContent>
                    <Box id="b-p">
                      
                      </Box>
                  </Card>
                </Grid>
                
              ))}
            </Grid>
          </Container>
          </Box>
         </Container>


    </>
  )
}

export default EmergencyDept