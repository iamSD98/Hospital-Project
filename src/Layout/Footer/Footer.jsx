import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "../../StyleComponants/Layout_style/Footer.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
const Footer = () => {
  return (
    <>
   
    <Box id="footer">
        <Container maxWidth='xl'>
          <Grid container spacing={3}>
            <Grid item md={3}>
              <Typography id='logo'>
                <img src="Assets/img/logo.png" alt="logo" height={90} width={350}/>
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Box>
                <Stack id='p1'> 
                  Department
                </Stack> 
                
  <Stack id='p2'>General Physican</Stack>
  <Stack id='p2'>Cardiologist</Stack>
  <Stack id='p2'>Gynaecologist</Stack>
  <Stack id='p2'>Paediatrics</Stack>  
  <Stack id='p2'>Surgen</Stack>
  <Stack id='p2'>Nephrologist</Stack>
  <Stack id='p2'>Dentist</Stack>
                
                  
              
              </Box>
            </Grid>
            <Grid item md={3}>
            <Stack id='p1'> 
                  Academisc
                </Stack> 
                <Stack id='p2'>BSC Nursing</Stack> 
                <Stack id='p2'>Hospital Management</Stack> 
                <Stack id='p2'>Paramedical Course</Stack> 
              
            </Grid>
            <Grid item md={3}>
            <Stack id='p1'> 
                Contact Us
                </Stack> 
                <Stack ><a href="tel:03327787312"id='p2'>Call us at (033)-2778-7312</a></Stack> 
                <Stack id='p2'>Book Appointment Online</Stack> 
                <Stack id='p2'>Book Admission Online</Stack>
                <Stack id='p2'>Give Your Feedback</Stack> 

                <Stack >
                  <Box >
                < LocationOnIcon sx={{color:"white"}}/>  
                <span id='p1'>For Visit</span>
                <Stack id='p2'>Plot-12, Eco Intelligent Park, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</Stack> 
                </Box>
                </Stack>
                {/* <Stack id='p2'>Plot-12, Eco Intelligent Park, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</Stack>  */}
            </Grid>
           
          </Grid>

           <Box id='cpy'>
            <Box ><FacebookRoundedIcon sx={{fontSize:"40px",margin:"2%",cursor:"pointer"}}/>
            <InstagramIcon sx={{fontSize:"40px",margin:"2%",cursor:"pointer"}}/>
            <WhatsAppIcon sx={{fontSize:"40px",margin:"2%",cursor:"pointer"}}/></Box><hr/>
           Copyright ©2023 All rights reserved 
           <br/><span>This Website is Designed and Developed by <span style={{color:'crimson'}}>Subham & Siddhartha</span></span>
           </Box>
        </Container>
      </Box>

  
      
    </>
  );
};

export default Footer;
