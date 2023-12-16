import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Department = () => {
  let doc_url = " http://localhost:4000/doctors/";
  let [fetchdoc, setFetchdoc] = useState([]);

  useEffect(() => {
    axios
      .get(doc_url)
      .then((res) => {
        console.log("The fetch docdor ", res.data);
        setFetchdoc(res.data);
      })
      .catch((err) => {
        console.log("Doctor dont fetch", err);
      });
  }, []);

  return (
    <div>
      <Box>
        <Container>
          <h1>Department page</h1>
        </Container>

        <Grid container spacing={2}>
          {fetchdoc.map((post) => (
            <Grid item md={4} key={post.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.shutterstock.com/image-vector/vector-medical-icon-doctor-image-600nw-1170228883.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.department}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`deptdetails-page/${post.id}`}>
                    <Button size="small">Details</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Department;
