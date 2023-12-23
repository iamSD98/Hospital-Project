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


let fetchPtn=()=>{
  axios.get(user_api)
  .then(res=>{
      setPtnDetail(res.data)
      console.log("user fetch",res.data);
  })
  .catch(err=>{
      console.log("usrr not ffetch",err);
  })
}

    useEffect(()=>{
      fetchPtn();  
    },[])


    let deleteAppo=((id)=>{
      axios.delete(`${user_api}/${id}`)
      .then(res=>{
        alert("data deleted")
        fetchPtn();
      })
      .catch(err=>{
        alert("deletion failed")
      })
    })



  return (
    <div>
        <h1>PtnDetails</h1>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="left">Appo No.</TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Relation</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Age</TableCell>
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
              <TableCell align="left">{post.id}</TableCell>
            <TableCell align="left">{post.pfname}</TableCell>
            <TableCell align="left">{post.plname}</TableCell>
            <TableCell align="left">{post.prelt}</TableCell>
            <TableCell align="center">{post.pgen}</TableCell>
            <TableCell align="center">{post.page}</TableCell>
            <TableCell align="center">{post.padd}</TableCell>
            <TableCell align="center">{post.docname}</TableCell>
            <TableCell align="center">{post.date}</TableCell>
            <TableCell align="center">{post.time}</TableCell>
              
              <TableCell align="right">
                <Link to={`editdetail/${post.id}`}>
                <Button>Update</Button>
                </Link>
                </TableCell> 
                <TableCell align="right"> 
                <Button onClick={()=>deleteAppo(post.id)}>Delete</Button>
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