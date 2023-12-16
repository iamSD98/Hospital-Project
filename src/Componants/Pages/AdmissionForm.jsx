import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { Description } from "@mui/icons-material";

const AdmissionForm = () => {
  const paperStyle = { padding: "30px 20px", width: 800, margin: "50px auto" };
  let [dept, setDepart] = useState([
    "Opration",
    "Metarnity",
    "Emargency",
    "Outdoor",
  ]);
  const department = ["Opration", "Metarnity", "Emargency", "Outdoor"];

  let [doctor, setDoctor] = useState([{doc:["Dr sujay kundu","Dr pritha mondal"],doc2: "Dr Bijay khan",doc3: "Dr pritha mondal",doc4: "Dr p sinha roy"}]);
  const doctors = ["Dr sujay kundu", "Dr Bijay khan", "Dr pritha mondal", "Dr p sinha roy"];

  let [ptnData, setPtnData] = useState({
    pname: "",
    gname: "",
    email: "",
    pnum: "",
    add: "",
    reason: "",
    dname: "",
  });

  let changeHandle = (event) => {
    let { name, value } = event.target;
    setPtnData({ ...ptnData, [name]: value });

    setDepart(event.target.value);
     setDoctor(event.target.value);
  };
  let submitHaldle = (event) => {
    event.preventDefault();
    console.log("the patient data is", ptnData);
  };

  return (
    <div>
      <Container>
        <Paper elevation={20} style={paperStyle}>
          <Grid xs={12} md={12} item>
            <h2 align="center">Patient Admission Form</h2>
          </Grid>

          <form onSubmit={submitHaldle}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Patient Name"
                  variant="outlined"
                  fullWidth
                  name="pname"
                  onChange={changeHandle}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Guardian Name"
                  variant="outlined"
                  fullWidth
                  name="gname"
                  onChange={changeHandle}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  onChange={changeHandle}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  name="pnum"
                  onChange={changeHandle}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  name="add"
                  onChange={changeHandle}
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <Select
                  label="select department"
                  value={dept}
                  select
                  fullWidth
                  name="reason"
                  onChange={changeHandle}
                  sx={{ width: "300px" }}
                >
                  {department.map((dept, index) => (
                    <MenuItem value={index} key={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid xs={12} sm={6} item>
              <Select
                  label="select department"
                  value={doctor}
                  select
                  fullWidth
                  name="reason"
                  onChange={changeHandle}
                  sx={{ width: "300px" }}
                >
                  {doctors.map((doc, index) => (
                    <MenuItem value={index} key={doc}>
                      {doc}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Admission Booked{" "}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdmissionForm;
