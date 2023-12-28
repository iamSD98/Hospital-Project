
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Link, useParams } from 'react-router-dom';
// import { Box, Button } from '@mui/material';


// const AdmDetail = () => {

//   let admission_url="http://localhost:4000/admission";

//   let fetchAdmission=()=>{
//     axios.get(admission_url)
//     .then(res=>{
//         setPtnDetail(res.data)
        
//         console.log("fetch admission details",res.data);
//     })
//     .catch(err=>{
//         console.log("usrr not ffetch",err);
//     })
//   }
//   useEffect(()=>{
//     fetchPtn(); 
//     // fetchAdmission();
     
//   },[])



//   return (
//     <div>AdmDetail

//     <h1 style={{textAlign:'center',fontFamily:'kanit'}}>Patient Addmission</h1>
//     <Box sx={{marginBottom:24}}>
//     <TableContainer component={Paper}>
//  <Table sx={{ minWidth: 650 }} aria-label="simple table">
//    <TableHead sx={{boxShadow:'0px 3px 12px black',borderTop:'2px groove black',
//    borderRight:'2px groove black',borderLeft:'2px groove black'}}>
//      <TableRow> 
       
//        <TableCell align="left" sx={{fontSize:'15px',fontWeight:600}}>Appo No.</TableCell>
//        <TableCell align="left" sx={{fontSize:'15px',fontWeight:600}}>First Name</TableCell>
//        <TableCell align="left" sx={{fontSize:'15px',fontWeight:600}}>Last Name</TableCell>
//        <TableCell align="left" sx={{fontSize:'15px',fontWeight:600}}>Relation</TableCell>
//        <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Gender</TableCell>
//        <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Age</TableCell>
//        <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Address</TableCell>
//        <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Doctor Name</TableCell>
//        <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Date</TableCell>
//        <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Time</TableCell>
//        <TableCell align="right" sx={{fontSize:'15px',fontWeight:600}}>Update</TableCell>
//        <TableCell align="right" sx={{fontSize:'15px',fontWeight:600}}>Delete</TableCell>
//      </TableRow>
//    </TableHead>
//    {/* <TableBody>
//      {ptnDetail.map((post) => (
//        <TableRow
//          key={post.id}
//          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//        >
//          <TableCell align="left">{post.id}</TableCell>
//        <TableCell align="left">{post.pfname}</TableCell>
//        <TableCell align="left">{post.plname}</TableCell>
//        <TableCell align="left">{post.prelt}</TableCell>
//        <TableCell align="center">{post.pgen}</TableCell>
//        <TableCell align="center">{post.page}</TableCell>
//        <TableCell align="center">{post.padd}</TableCell>
//        <TableCell align="center">{post.docname}</TableCell>
//        <TableCell align="center">{post.date}</TableCell>
//        <TableCell align="center">{post.time}</TableCell>
         
        
//        </TableRow>
//      ))}
//    </TableBody> */}
//  </Table>
// </TableContainer>
//     </Box>
//     </div>
//   )
// }

// export default AdmDetail