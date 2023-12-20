import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const PtnDetails = () => {

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
    <div>
        <h1>PtnDetails</h1>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Doctor Name</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ptnDetail.map((post) => (
            <TableRow
              key={post.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {post.ptname}
              </TableCell>
              <TableCell align="center"> {post.padd}</TableCell>
              <TableCell align="center"> {post.docname}</TableCell>
              <TableCell align="center"> {post.date}</TableCell>
              <TableCell align="center" > {post.time}</TableCell>
              <TableCell align="right">
                <Link>
                <Button>Update</Button>
                </Link>
              </TableCell>
              <TableCell align="right">
                <Button>Delete</Button>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </div>
  )
}

export default PtnDetails