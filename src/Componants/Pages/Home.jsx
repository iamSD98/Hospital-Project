import { Container, Box, Stack, Grid, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../StyleComponants/Pages_style/Home.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { Link } from "react-router-dom";


function srcSet(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
    
  }
}

const Home = () => {
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



  
  return (
    <>
      {/*---------------------------------------------------------------Banner----------------------------------------------------------------------*/}
      
      <Box id="box">
        <Container>
          <Grid container>
            <Grid item md={6}>
              <Box
                id="banner-text"
                sx={{ display: { md: "flex", xs: "none" } }}
              >
                <Typography id="intro">
                  We Care About
                  <br />
                  <span style={{ fontSize: "60px" }}>Your</span>{" "}
                  <span style={{ color: "crimson",fontSize: "75px"  }}>Health</span>
                </Typography>
              </Box>
              <Box
                id="banner-text1"
                sx={{ display: { md: "none", xs: "flex" } }}
              >
                <Typography id="intro">
                  We Care About
                  <br />
                  <span style={{ fontSize: "60px" }}>Your</span>{" "}
                  <span style={{ color: "crimson" }}>Health</span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        {img.map((post) => (
          <React.Fragment key={post.id}>
            <img src={post.banner.homebanner} alt="" id="banner" />
          </React.Fragment>
        ))}
      </Box>

      {/*---------------------------------------------------------------Wrapper----------------------------------------------------------------------*/}

      <Container maxWidth="x1">
        <Box id="wrapper">

          {/*---------------------------------------------------------------About----------------------------------------------------------------------*/}

          <Container>
            <Box id="abt">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box id="abt-right">
                    <h2>About Our Hospital</h2>
                    <h1>Welcome To Our Hospital</h1>
                    <h4>
                      There arge many variations ohf pacgssages of sorem gpsum
                      ilable, but the majority have suffered alteration in some
                      form, by ected humour, or randomised words whi.
                    </h4>
                  </Box>
                  <Stack
                    direction={"column"}
                    sx={{ display: { md: "flex", xs: "none" } }}
                  >
                   <Link to="emergency-dept">
                    <Button id="abt-btn">
                    Emargency 
                      <ArrowRightAltIcon style={{ color: "black" }} />
                    </Button>
                    </Link> 

                    <Link to="admission">
                      <Button id="abt-btn">
                        Admission
                        <ArrowRightAltIcon style={{ color: "black" }} />
                      </Button>
                    </Link>

                    <Link to="academics">
                    <Button id="abt-btn">
                    Academics
                      <ArrowRightAltIcon style={{ color: "black" }} />
                    </Button>
                    </Link> 
                  </Stack>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: { md: "flex", xs: "none" } }}
                >
                  <img src="Assets/img/about2.png" alt="img1" id="abt-img-2" />
                </Grid>
              </Grid>
            </Box>
          </Container>

          <Container>
            <Box id="abt1">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Stack
                    direction={"column"}
                    sx={{ display: { md: "none", xs: "flex" } }}
                  >
                     <Link to="emergency-dept">
                     <Button id="abt-btn-xs">
                      Emargency
                      <ArrowRightAltIcon style={{ color: "black" }} />
                    </Button>
                    </Link> 
                    
                    <Link to="admission">
                      <Button id="abt-btn-xs">
                      Admission
                        <ArrowRightAltIcon style={{ color: "black" }} />
                      </Button>
                    </Link>
                     <Link to='academics'>
                     <Button id="abt-btn-xs">
                     Academics
                      <ArrowRightAltIcon style={{ color: "black" }} />
                    </Button>
                     </Link>
                    
                  </Stack>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: { md: "none", xs: "flex" } }}
                >
                  <img
                    src="Assets/img/about2.png"
                    alt="img2"
                    id="abt-img-2-xs"
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>

          {/*---------------------------------------------------------------Department----------------------------------------------------------------------*/}

          <Container>
            <Box id="department">
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "5%",
                  fontFamily: "Kanit, sans-serif",
                }}
              >
                Department
              </h2>
              <Grid container spacing={4}>
                <Grid item xs={6} md={3}>
                  <Card sx={{ maxWidth: 345 }} id="dep_img">
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://img.freepik.com/free-photo/close-up-man-rubbing-his-painful-back-isolated-white-background_1150-2934.jpg?w=1480&t=st=1702754958~exp=1702755558~hmac=f33a32e1be86bff57be57bff95a95864af8ac6f6d9bfc3084bdf54b31d21e861"
                      
                      title="Orthopaedic"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        Orthopaedic 
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        About Department
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6} md={3}>
                  <Card sx={{ maxWidth: 345 }} id="dep_img">
                    <CardMedia
                      sx={{ height: 140 }}
                      image="assets/img/genarel_p.jpg"
                      title="Eye Care"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        General Physican
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        About Department
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6} md={3}>
                  <Card sx={{ maxWidth: 345 }} id="dep_img">
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://www.vadamalayan.org/wp-content/uploads/2023/02/cardio-img.jpg"
                      title="Skin Care"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        Cardiologist
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        About Department
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Card sx={{ maxWidth: 345 }} id="dep_img">
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://7dmc.ae/wp-content/uploads/2020/08/banner-Gynecology-Clinic2.jpg"
                      title=" Surgery"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        Gynaecologist
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        About Department
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Card sx={{ maxWidth: 345 }} id="dep_img">
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://ssimsb.ac.in/public//uploads/course/1655210928.jpg"
                      title="Dental Care"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                       Paediatrics 
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        About Department
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Card sx={{ maxWidth: 345 }} id="dep_img">
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://sanjayhospital.in/images/bg/surgical-department.jpg"
                      title="Dental Care"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        Surgeon
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        About Department
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Card sx={{ maxWidth: 345 }} id="dep_img">
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://videohive.img.customer.envatousercontent.com/files/52bfb920-5b9d-42c8-a377-c9f39b302d54/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=23706a6e13e688141541292e541dde18"
                      title="Dental Care"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        Neurologist
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        About Department
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Card sx={{ maxWidth: 345 }} id="dep_img">
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://www.dentiquecochin.com/blog/wp-content/uploads/2019/07/dental-implant-treatment-in-kochi.jpg"
                      title="Dental Care"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        Dentist
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        About Department
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>

          


          {/*---------------------------------------------------------------Medical Camp----------------------------------------------------------------------*/}
          {/* <Box id="medical_camp">
            <Container>
              <h2 style={{ textAlign: "center", marginBottom: "5%",fontFamily:'Kanit, sans-serif' }}>
                Our Medical Camp
              </h2>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                 
                </Grid>

                <Grid item xs={12} md={6}>

                </Grid>
              </Grid>
            </Container>
          </Box> */}
          {/*---------------------------------------------------------------Testimonials----------------------------------------------------------------------*/}
          <Box id="testimonial">
            <Container maxWidth="x1">
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "5%",
                  fontFamily: "Kanit, sans-serif",
                }}
              >
                Testimonials
              </h2>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box id="test-right">
                    <Typography id="t-text">
                      “I am at an age where I just want to be fit and
                      <br />
                      healthy our bodies are our responsibility!
                      <br />
                      So start caring for your body and it will care for you.
                      <br />
                      Eat clean it will care for yout hard.”
                    </Typography>
                  </Box>
                  <Stack direction={"column"}></Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box id="test-left">
                    <img
                      src="Assets/img/startup.png"
                      alt="testiimg"
                      id="left_img"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          {/*---------------------------------------------------------------Specalist----------------------------------------------------------------------*/}
          {/* <Box id="specalist">
            <Container>
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "5%",
                  fontFamily: "Kanit",
                }}
              >
                Our Speacalist
              </h2>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}></Grid>

                <Grid item xs={12} md={6}></Grid>
              </Grid>
            </Container>
          </Box> */}
{/* //---------------------------------------------galary-------------------------------------------------------------------------// */}

          <Box id="galary">
            <Container>
            <h2
                style={{
                  textAlign: "center",
                  marginBottom: "5%",
                  fontFamily: "Kanit",
                }}
              >
                Gallery
              </h2>
            <ImageList
      sx={{ width:"100%", height: 550 }}
      variant="quilted"
      cols={4}
      rowHeight={134}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcSet(item.img, item.rows, item.cols)}
            style={{objectFit:"cover",height:"100%",width:"100%"}}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
 
            </Container>
          </Box>
     
        </Box>
      </Container>
    </>
  );
};

export default Home;
const itemData = [
  {
    img: 'https://www.wisemedical.com.au/wp-content/uploads/2023/06/Radiology3-1.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.diabecare.org/images/pft-test.jpg',
    title: 'Burger',
  },
  {
    img: 'assets/img/genarel_p.jpg',
    title: 'Camera',
  },
  {
    img: 'https://www.southcoasthealth.com/assets/upload/3e71869e-831f-444f-a138-c978f32e2c6a/nephrologist-listens-to-the-kidneys-on-medical-background-3d-illustration.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://www.vadamalayan.org/wp-content/uploads/2023/02/cardio-img.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://ssimsb.ac.in/public//uploads/course/1655210928.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    
  },
  {
    img: 'https://7dmc.ae/wp-content/uploads/2020/08/banner-Gynecology-Clinic2.jpg',
    title: 'Basketball',
    
  },
  {
    img: 'https://www.dentiquecochin.com/blog/wp-content/uploads/2019/07/dental-implant-treatment-in-kochi.jpg',
    title: 'Fern',
  
  },
  
 
];
