import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import '../../StyleComponants/Pages_style/Department.css'
import { Container} from "@mui/material";
import { Link } from "react-router-dom";

const Department = () => {
  let doc_url = " http://localhost:4000/doctors/";

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
  
  let [fetchdoc, setFetchdoc] = useState([]);

  useEffect(() => {
    axios
      .get(doc_url)
      .then((res) => {
        // console.log("The fetch docdor ", res.data);
        setFetchdoc(res.data);
      })
      .catch((err) => {
        // console.log("Doctor dont fetch", err);
      });
  }, []);

  return (
    <>
      <Box id="dep-banner">
        <Container>
          <Box>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography style={{textShadow:'0px 5px 8px black'}} id="dep-intro">
                  Department
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
        {img.map((post) => (
          <React.Fragment key={post.id}>
            <img src={post.banner.depatbanner} alt="" id="d-banner" />
          </React.Fragment>
        ))}
      </Box>

      {/*---------------------------------------------------------------Wrapper----------------------------------------------------------------------*/}

      <Container maxWidth="x1">
        <Box id="dep-wrapper" sx={{display:{md:'flex',xs:'none'}}}>
          <Container>
            
            <Grid container spacing={6} >
              {fetchdoc.map((post) => (
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
                      <Typography variant="h5" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <Box id="b-p">
                      <Link to={`deptdetails-page/${post.id}`}>
                        <Button id="btn1">Details</Button>
                      </Link>
                      </Box>
                  </Card>
                </Grid>
                
              ))}
            </Grid>
          </Container>
          </Box>
          
            <Box id="dep-wrapper1" sx={{display:{md:'none',xs:'flex'}}}>
            <Container>
            <Grid container spacing={2} sx={{display:{md:'none',xs:'flex'}}}>
              {fetchdoc.map((post) => (
                <Grid item md={4} key={post.id} >
                  <Card
                    sx={{
                      maxWidth:'100%',
                      borderRadius: "20px",
                      boxShadow: "0px 5px 10px black",
                      marginBottom:10,
                      marginTop:10,
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
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                   
                      <Box id="b-p1">
                      <Link to={`deptdetails-page/${post.id}`}>
                        <Button id="btn1">Details</Button>
                      </Link>
                      </Box>
                  </Card>
                </Grid>
                
              ))}
            </Grid>
          </Container>
          </Box>
          </Container>
      
     
    </>
  );
};

export default Department;
