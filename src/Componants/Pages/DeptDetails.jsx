import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { Container, Stack } from "@mui/material";







const DeptDetails = () => {

   let {id}=useParams(); 

let depart_url = " http://localhost:4000/doctors";
  let [fetchdept, setDept] = useState([]);

  useEffect(() => {
    axios
      .get(`${depart_url}/${id}`)
      .then((res) => {
        console.log("The fetch docdor ", res.data);
        setDept(res.data);
      })
      .catch((err) => {
        console.log("Doctor dont fetch", err);
      });
  }, []);
  return (
    <>
    
      <Box id='dept-banner'>
          <img src={fetchdept.deptbanner} alt="" srcset="" />
      </Box>

      <Container maxWidth="xl">
        <Box id="wrapper">
        <h1>Name of the department:{fetchdept.department}</h1>
        <h3>{fetchdept.subheading}</h3>
        <h5>All available doctors</h5>
         <Box>
            {/* {
                fetchdept?.consultant &&  fetchdept?.consultant?.map((doc)=>(
                    <Box key={doc.docid}>
                        <p>{doc.doctorname}</p>
                        <Link to={`doctordetails-page/${doc.docid}`}>
                        <button>View details</button>
                        </Link>
                        
                        <hr/>
                    </Box>
                ))
            } */}

             

                    <Container maxWidth='x1'>
                      <Box>
                        <Grid container spacing={2}>
                          {
                            fetchdept?.consultant &&  fetchdept?.consultant?.map((doc)=>(
                              <Grid item md={4} key={doc.docid}>
                                   <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        sx={{ height: 250, width: 300, margin: "10px auto" }}
                        image="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1702252800&semt=ais"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {doc.doctorname}
                        </Typography>
                      </CardContent>
                        <CardActions>
                        <Link to={`doctordetails-page/${doc.docid}`}>
                        
                          <Button size="small">Details</Button>
                        </Link>
                        </CardActions>
                    </Card>
                              </Grid>
                            ))
                          }

                        </Grid>
                      </Box>
                    </Container>
                  
                  {/* <Grid item md={4} xs={12}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        sx={{ height: 250, width: 300, margin: "10px auto" }}
                        image="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1702252800&semt=ais"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {doc.doctorname}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid> */}
                  {/* <Grid item md={8} xs={12}>
                    <Typography>
                      <h1>{doc.doctorname}</h1>
                      <h2>{doc.qualification} </h2>
                      <h3>{doc.experiance} of Experience </h3>
                      <h4>
                        We understand that women across different age groups have
                        different health complications. At AMRI, a lot of emphasis
                        is laid on providing top notch gynaecological treatment.
                        The Department of Obstetrics & Gynaecology across all
                        units aim to provide the most comprehensive women’s
                        healthcare services.
                      </h4>
                    </Typography>
                  </Grid> */}
                      
                
                
              
        </Box>
        
        </Box>

      </Container>
      
       

    
    </>
  )
}

export default DeptDetails