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

const Career = () => {
  return (
    <>
       <Box id="dep-banner">
        <Container>
          <Box>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography id="dep-intro">
                  <h5 style={{textShadow:'0px 5px 8px black'}}>Emergency Department</h5>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
         </Box>

         <Container maxWidth='x1'>
         <Box id="dep-wrapper" sx={{display:{md:'flex',xs:'none'}}}>
          <Container>

          </Container>
          </Box>
          </Container>
    </>
  )
}

export default Career
