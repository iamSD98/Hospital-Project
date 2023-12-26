import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "../../StyleComponants/Layout_style/Footer.css";
const Footer = () => {
  return (
    <>
   
    <Box id="footer">
        <Container maxWidth='xl'>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Typography id='logo'>
                <img src="Assets/img/logo.png" alt="logo" height={90} width={350}/>
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Box>
                <Stack id='p1'> 
                  ABOUT US
                </Stack> 
                
                   <Stack id='p2'>
                   Lorem igpsum doldfor sit amet, adipiscing elit, sed do eiusmod
                  tempor cergelit rgh.
                  </Stack>
                
                
                  <Stack id='p2'> Lorem ipsum dolor sit amet, adipiscing elit.</Stack>
              
              </Box>
            </Grid>
            <Grid item md={4}>
              <Stack id='c1'>
              +033-5425-6521
              </Stack>
              <Stack id='c2'>
              S&Shospital@gmail.com
              </Stack> 
            </Grid>
           
          </Grid>
           <Box id='cpy'>
           Copyright ©2023 All rights reserved 
           <br/><span>This template is made by <span style={{color:'crimson'}}>Subham & Siddhartha</span></span>
           </Box>
        </Container>
      </Box>

  
      
    </>
  );
};

export default Footer;
