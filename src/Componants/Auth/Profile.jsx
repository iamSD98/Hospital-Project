import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { profile_page } from "../../Redux/Slice/AuthSlice";
import "../../StyleComponants/Auth_style/Profile.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Profile = () => {
  // let Profile_api="https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";

  // let valid_token=window.sessionStorage.getItem("tokenvalue");
  // console.log("collected token",valid_token);

  let dispatch = useDispatch();

  let [single_user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    register_type: "",
    profile_pic: "",
  });

  useEffect(() => {
    dispatch(profile_page())
      .then((res) => {
        console.log("Get value for profile", res);

        let base_url = "https://wtsacademy.dedicateddevelopers.us/";
        let folder_path = "uploads/user/profile_pic/";
        let img_url = base_url + folder_path + res.payload.data.profile_pic;

        // setUser({...res.payload.data,profile_pic:img_url})

        setUser({
          ...single_user,
          first_name: res.payload.data.first_name,
          last_name: res.payload.data.last_name,
          email: res.payload.data.email,
          profile_pic: img_url,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [dispatch]);

  //For patient details informations 

  let [ptnDetail,setPtnDetail]=useState([]);
  let user_api="http://localhost:4000/users"

  useEffect(()=>{
    axios.get(user_api)
    .then(res=>{
        setPtnDetail(res.data)
        console.log("user fetch",res.data);
    })
    .catch(err=>{
        console.log("usrr not ffetch",err);
    })
},[])




  return (
    <>
      <Container maxWidth="x1">
        <Box>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Box id="p-bg">
                <Box>
                  <img
                    src={single_user.profile_pic}
                    alt="p-img"
                    id="profile-img"
                  />
                  <CameraAltIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "kanit",
                      fontSize: "30px",
                      textAlign: "center",
                      paddingTop: 5,
                    }}
                  >
                    {single_user.first_name}
                    <span style={{ paddingLeft: 3 }}>
                      {" "}
                      {single_user.last_name}{" "}
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={8}>
              <Box>
                {
                  ptnDetail.map((post)=>(
                    <Box key={post.id}> 
                    <p>name:{post.pfname}</p>
                    <p>age:{post.page}</p>


                    </Box>
                  ))
                }
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
