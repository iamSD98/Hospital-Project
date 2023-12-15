import React, { useState } from "react";
import {
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Stack,
  InputAdornment,
  FormControl,
} from "@mui/material";
import "../../StyleComponants/Auth_style/Login.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const Login = () => {
  // let vaildRegxp_name = ["^([A-Z][a-z])( )([A-Z][a-z])$"]
  let vaildRegxp_mail = RegExp("^([a-z0-9])+@(gmail|yahoo|outlook).(com)$");
  let vaildRegxp_pass = RegExp(
    "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,11}$"
  );

  let [inputstate, setinputstate] = useState({
    email: "",
    password: "",
    errors: { email: "", password: "" },
  });

  let [isCorrect, setIsCorrect] = useState({ email: true, password: true });

  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  let changeHandle = (event) => {
    let { name, value } = event.target;
    let errmsg = inputstate.errors;

    switch (name) {
      case "email":
        if (value.length <= 0) {
          errmsg.email = "*Requierd filed";
          setIsCorrect({ ...isCorrect, email: true });
        } else if (!vaildRegxp_mail.test(value)) {
          errmsg.email = "Please Enter Vaild Email";
          setIsCorrect({ ...isCorrect, email: true });
        } else {
          errmsg.email = "";
          setIsCorrect({ ...isCorrect, email: false });
        }

        break;

      case "password":
        if (value.length <= 0) {
          errmsg.password = "*Requierd filed";
          setIsCorrect({ ...isCorrect, password: true });
        } else if (!vaildRegxp_pass.test(value)) {
          errmsg.password = "Please Enter Vaild Password";
          setIsCorrect({ ...isCorrect, password: true });
        } else {
          errmsg.password = "";
          setIsCorrect({ ...isCorrect, password: false });
        }
        break;

      default:
        console.log("error");
    }
    setinputstate({ ...inputstate, [name]: value, error: errmsg });
    // console.log("error: ",inputstate.errors);
  };

  let submitHandle = (event) => {
    event.preventDefault();
    // console.log("the reg data", inputstate);
    // let registarData = new FormData();

    // registarData.append("first_name", state.first_name);
    // registarData.append("last_name", state.last_name);
    // registarData.append("email", state.email);
    // registarData.append("password", state.password);

    // dispatch(hosp_sgin_up(registarData))
    //   .then((res) => {
    //     console.log("Response from API", res);
    //     navigate("/user/authentication/login");
    //   })
    //   .catch((err) => {
    //     console.log("Reg failed");
    //   });
  };

  return (
    <>
      <Box id="bg">
        <Container>
          <Box id="login-page" sx={{ display: { xs: "none", md: "flex" } }}>
            <Grid container>
              <Grid item md={6}>
                <Box id="login-img-box"></Box>
              </Grid>
              <Grid item md={6}>
                <Box id="login">
                  <Grid align="center">
                    <h2>LogIn</h2>
                  </Grid>
                  <FormControl id="f1" onSubmit={submitHandle}>
                    <TextField
                      fullWidth
                      id="input-with-icon-textfield"
                      label="Email"
                      name="email"
                      style={{ marginBottom: "5%" }}
                      onChange={changeHandle}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ color: "green" }}
                          >
                            {isCorrect.email === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />

                    {inputstate.errors && inputstate.errors.email.length > 0 ? (
                      <Stack
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                        }}
                      >
                        {inputstate.errors.email}
                      </Stack>
                    ) : null}
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type={passwordType}
                      onChange={changeHandle}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ color: "green" }}
                          >
                            {isCorrect.password === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        onChange={togglePassword}
                        style={{ display: "grid" }}
                      />
                      <span>Show password</span>
                    </Box>
                    {inputstate.errors &&
                    inputstate.errors.password.length > 0 ? (
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                        }}
                      >
                        {inputstate.errors.password}
                      </Typography>
                    ) : null}

                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isCorrect.email || isCorrect.password}
                    >
                      Sign In
                    </Button>
                  </FormControl>

                  <h4 id="link-text">
                    Do you want to create a account?
                    <Link
                      to="/signUp"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      {" "}
                      Sign Up
                    </Link>
                  </h4>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* ----------------------------------------- small screen ---------------------------------------------------*/}

          <Box id="login-page" sx={{ display: { xs: "flex", md: "none" } }}>
            <Grid container>
              <Grid item xs={12}>
                <Box id="s-login">
                  <Grid align="center">
                    <h2>LogIn</h2>
                  </Grid>
                  <FormControl id="f2">
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      style={{ marginBottom: "5%" }}
                      onChange={changeHandle}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ color: "green" }}
                          >
                            {isCorrect.email === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                    {inputstate.errors && inputstate.errors.email.length > 0 ? (
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                          fontFamily: "Kanit",
                          fontWeight: 800,
                        }}
                      >
                        {inputstate.errors.email}
                      </Typography>
                    ) : null}

                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type={passwordType}
                      onChange={changeHandle}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ color: "green" }}
                          >
                            {isCorrect.password === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        onChange={togglePassword}
                        style={{ display: "grid" }}
                      />
                      <span>Show password</span>
                    </Box>
                    {inputstate.errors &&
                    inputstate.errors.password.length > 0 ? (
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                          fontFamily: "Kanit",
                          fontWeight: 800,
                        }}
                      >
                        {inputstate.errors.password}
                      </Typography>
                    ) : null}

                    <Button
                      variant="contained"
                      color="primary"
                      value={isCorrect.email}
                      disabled={isCorrect.email || isCorrect.password}
                    >
                      Sign In
                    </Button>
                  </FormControl>
                  <h4 id="link-text">
                    Do you want to create a account?
                    <Link
                      to="/signUp"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      {" "}
                      Sign Up
                    </Link>
                  </h4>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
