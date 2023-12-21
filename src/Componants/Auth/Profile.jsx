import React, { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { profile_page } from "../../Redux/Slice/AuthSlice";
import "../../StyleComponants/Auth_style/Profile.css";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
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

  let [ptnDetail, setPtnDetail] = useState([]);
  let user_api = "http://localhost:4000/users";

  useEffect(() => {
    axios
      .get(user_api)
      .then((res) => {
        setPtnDetail(res.data);
        console.log("user fetch", res.data);
      })
      .catch((err) => {
        console.log("usrr not ffetch", err);
      });
  }, []);

  //for upload profie pic
  let [imgState, setImgstate] = useState();

  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    setImgstate(e.target.files[0]);
    console.log("Selected File:", setImgstate);
  };

  return (
    <>
      <Container maxWidth="x1">
        <Box>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Box id="p-bg">
                <Box className="profile-pic">
                  <Box id="pic">
                    <img
                      src={single_user.profile_pic}
                      alt="p-img"
                      id="profile-img"
                    />
                  </Box>
                  <Box>
                    <input
                      ref={fileInputRef}
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                    <IconButton
                      onClick={handleFileSelect}
                      id="handle"
                    >
                      <CameraAltRoundedIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "kanit",
                      fontSize: "30px",
                      textAlign: "center",
                      paddingTop: 5,
                      paddingBottom:10
                    }}
                  >
                    {single_user.first_name}
                    <span style={{ paddingLeft: 3 }}>
                      {single_user.last_name}
                    </span>
                    <br/>
                      {single_user.email}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={8}>
            <h1 style={{textAlign:'center',fontFamily:'kanit'}}>My Appointments</h1>
              <Grid container spacing={6}>
              
                {ptnDetail.map((post) => (
                  <Grid items md={6} key={post.id}>
                    <Box id='card'>
                    <p>Doctor Name: {post.docname}</p>
                    <p>Address: {post.padd}</p>
                    <p>Gender:{post.pgen}</p>
                    <p>Phone:{post.pno}</p>
                    <p>Date:{post.date}</p>
                    <p>Time:{post.time}</p>

                    <Button variant="contained" color="primary">Edit</Button>
                    <span><Button variant="contained" sx={{backgroundColor:'red',marginLeft:'2%'}} >Delete</Button></span>
                    </Box>                 
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Profile;
