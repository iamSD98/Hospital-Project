import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../StyleComponants/Pages_style/DepartmentDetails.css";
import { Container, Stack } from "@mui/material";

const DeptDetails = () => {
  let { id } = useParams();

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
      <Box id="d-dbanner">
        <img src={fetchdept.deptbanner} alt="" id="banner-img" />
        <Container>
          <Box>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography id="d-dintro">
                  <h5 style={{ textShadow: "0px 5px 8px black" }}>
                    {fetchdept.department}
                  </h5>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="x1">
        <Box id="d-dwrapper">
          <Container>
            <Box>
              <h3 style={{ paddingTop: "10%", fontFamily: "kanit" }}>
                {fetchdept.subheading}
              </h3>
              <h5
                style={{
                  paddingTop: "3%",
                  fontFamily: "kanit",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                All available doctors
              </h5>
              <Grid container spacing={5}>
                {fetchdept?.consultant &&
                  fetchdept?.consultant?.map((doc) => (
                    <Grid item md={4} key={doc.docid}>
                      <Card
                        sx={{
                          maxWidth: "100%",
                          borderRadius: "20px",
                          marginBottom:8,
                          boxShadow: "0px 5px 10px black",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            height: 250,
                            width: 300,
                            margin: "10px auto",
                          }}
                          image=""
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {doc.doctorname}
                          </Typography>
                        </CardContent>
                        <Box id="bd-p1">
                          <Link to={`doctordetails-page/${doc.docid}`}>
                            <Button id="d-dbtn">Details</Button>
                          </Link>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default DeptDetails;
