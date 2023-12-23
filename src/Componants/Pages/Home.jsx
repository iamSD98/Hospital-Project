import { Container, Box, Stack, Grid, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../StyleComponants/Pages_style/Home.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

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
                    <Button id="abt-btn">
                    Emargency 
                      <ArrowRightAltIcon style={{ color: "black" }} />
                    </Button>
                    <Link to="user/authentication">
                      <Button id="abt-btn">
                        Appointment
                        <ArrowRightAltIcon style={{ color: "black" }} />
                      </Button>
                    </Link>

                    <Button id="abt-btn">
                    Academics
                      <ArrowRightAltIcon style={{ color: "black" }} />
                    </Button>
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
                    <Link to={'/emergency-dept-page'}>
                    <Button id="abt-btn-xs">
                      Emargency
                      <ArrowRightAltIcon style={{ color: "black" }} />
                    </Button>
                    </Link>
                    <Link to="/appointment">
                      <Button id="abt-btn-xs">
                        Appointment
                        <ArrowRightAltIcon style={{ color: "black" }} />
                      </Button>
                    </Link>

                    <Button id="abt-btn-xs">
                      career
                      <ArrowRightAltIcon style={{ color: "black" }} />
                    </Button>
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
                      image="Assets/img/Dental.png"
                      title="Dental Care"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        Dental Care
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
                      image="Assets/img/Eye.png"
                      title="Eye Care"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        Eye Care
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
                      image="Assets/img/Skin.png"
                      title="Skin Care"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        Skin Care
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
                      image="Assets/img/surgery.png"
                      title=" Surgery"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="Kanit, sans-serif"
                      >
                        Surgery
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
        </Box>
      </Container>
    </>
  );
};

export default Home;
