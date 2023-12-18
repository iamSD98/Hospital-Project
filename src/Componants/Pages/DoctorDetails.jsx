import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Grid, Typography } from "@mui/material";
import "../../StyleComponants/Pages_style/DocDetails.css";
const DoctorDetails = () => {
  let { did, id } = useParams();
  // console.log("get doc id",did);

  let depart_url = " http://localhost:4000/doctors";
  let [fetchDoc, setDoc] = useState({
    doctorname: "",
    qualification: "",
    experiance: "",
    proimg: "",
    docid: "",
  });

  useEffect(() => {
    axios
      .get(`${depart_url}/${id}`)
      .then((res) => {
        //   console.log("The fetch docdor ", res.data);
        let doc = res.data.consultant.find((data) => data.docid == did);
        // console.log("doctor", doc);
        setDoc({ ...fetchDoc, ...doc });
      })
      .catch((err) => {
        // console.log("Doctor dont fetch", err);
      });
  }, []);

  return (
    <>
      <Container>
        <Box
          sx={{
            maxWidth: "100%",
            borderRadius: "20px",
            marginBottom: 8,
            marginTop: 8,
            boxShadow: "0px 5px 10px black",
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <img
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
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
                  {fetchDoc.doctorname}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ paddingBottom: "30px", fontFamily: "kanit" }}
                >
                  Qualification: {fetchDoc.qualification}
                  <br/>
                  Experiance: {fetchDoc.experiance}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DoctorDetails;
