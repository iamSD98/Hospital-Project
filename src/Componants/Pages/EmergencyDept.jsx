import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import '../../StyleComponants/Pages_style/EmergencyDept.css'
import { Container} from "@mui/material";

const EmergencyDept = () => {

    
    let emgcy_url ="http://localhost:4000/emergencyDept";

    let [fetchEmgcy,setEmgcy]=useState([])

    useEffect(()=>{
        axios.get(emgcy_url)
        .then((res)=>{
            // console.log("emergency data fetch",res.data);
            setEmgcy(res.data)
        })
        .catch(err=>{
            // console.log("Data not fetch ",err);
        })
    },[emgcy_url])

    let embanner_url = " http://localhost:4000/image";
    let [img, setImg] = useState([]);
  
    useEffect(() => {
      axios
        .get(embanner_url)
        .then((res) => {
          // console.log("The banner ", res.data);
          setImg(res.data);
        })
        .catch((err) => {
          // console.log("banner dont fetch", err);
        });
    }, [embanner_url]);
  return (
    <>
        <Box id="em-banner">
        <Container>
          <Box>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography style={{textShadow:'0px 5px 8px black'}} id="em-intro">
                 Emergency Department
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
        {img.map((post) => (
          <React.Fragment key={post.id}>
            <img src={post.banner.emerbanner} alt="" id="em-banner" />
          </React.Fragment>
        ))}
         </Box>

         <Container maxWidth='x1'>
         <Box id="em-wrapper" sx={{display:{md:'flex',xs:'none'}}}>
          <Container>
            
            <Grid container spacing={6} >
              {fetchEmgcy.map((post) => (
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
                       
                      </Typography>
                    </CardContent>
                    <Box id="b-p">
                      
                      </Box>
                  </Card>
                </Grid>
                
              ))}
            </Grid>
          </Container>
          </Box>

          <Box id="em-wrapper1" sx={{display:{md:'none',xs:'block'}}}>
          <Container>
            
            <Grid container spacing={4} >
              {fetchEmgcy.map((post) => (
                <Grid item xs={12} key={post.id} >
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
                       
                      </Typography>
                    </CardContent>
                    <Box id="b-p1">
                      
                      </Box>
                  </Card>
                </Grid>
                
              ))}
            </Grid>
          </Container>
          </Box>
         </Container>


    </>
  )
}

export default EmergencyDept