import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const PtnDetails = () => {

let [ptnDetail,setPtnDetail]=useState([]);
let [admDetail,setAdmdetail]=useState([]);

let user_api="http://localhost:4000/users"
let admission_url="http://localhost:4000/admission";


let fetchPtn=()=>{
  axios.get(user_api)
  .then(res=>{
      setPtnDetail(res.data)
      
      // console.log("fetch appoint details",res.data);
  })
  .catch(err=>{
      console.log("usrr not ffetch",err);
  })
}



let fetchAdmission=()=>{
  axios.get(admission_url)
  .then(res=>{
      setAdmdetail(res.data)
      
      // console.log("fetch admission details",res.data);
  })
  .catch(err=>{
      console.log("usrr not ffetch",err);
  })
}
useEffect(()=>{
  fetchPtn(); 
  fetchAdmission();
   
},[])
    // useEffect(()=>{
      
    //   fetchAdmission(); 
    // },[])
   


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

    // const editHandle = ((id) =>{
    //   axios.post(`${user_api}/${id}`)
    //   .then(res=>{
        
    //     console.log(res);
    //   })
    //   .catch(err=>{
        
    //   })
    //   if (true) {
    //     document.getElementById('edit').style.display='block'
       
    //   }
    //   else{
    //     document.getElementById('edit').style.display='none'
    //   }
    // })


  return (
    <div>
         <h1 style={{textAlign:'center',fontFamily:'kanit'}}>Users Appointments Details</h1>
         <Box sx={{marginBottom:24}}>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{boxShadow:'0px 3px 12px black',borderTop:'2px groove black',
        borderRight:'2px groove black',borderLeft:'2px groove black'}}>
          <TableRow> 
            
            <TableCell align="left" sx={{fontSize:'15px',fontWeight:600}}>Appo No.</TableCell>
            <TableCell align="left" sx={{fontSize:'15px',fontWeight:600}}>First Name</TableCell>
            <TableCell align="left" sx={{fontSize:'15px',fontWeight:600}}>Last Name</TableCell>
            <TableCell align="left" sx={{fontSize:'15px',fontWeight:600}}>Relation</TableCell>
            <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Gender</TableCell>
            <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Age</TableCell>
            <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Address</TableCell>
            <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Doctor Name</TableCell>
            <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Date</TableCell>
            <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Time</TableCell>
            <TableCell align="right" sx={{fontSize:'15px',fontWeight:600}}>Update</TableCell>
            <TableCell align="right" sx={{fontSize:'15px',fontWeight:600}}>Delete</TableCell>
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
                <Link to={`/ptndetails/editdetail/${post.id}`}> <Button >Update</Button> </Link>
                
              
                
                </TableCell> 
                <TableCell align="right"> 
                <Button onClick={()=>deleteAppo(post.id)}>Delete</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </Box>
       
         <h1 style={{textAlign:'center',fontFamily:'kanit'}}>Users Admission Details</h1>


         <Box sx={{marginBottom:24}}>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{boxShadow:'0px 3px 12px black',borderTop:'2px groove black',
        borderRight:'2px groove black',borderLeft:'2px groove black'}}>
          <TableRow> 
            
            <TableCell align="left" sx={{fontSize:'15px',fontWeight:600}}>Add No.</TableCell>
            <TableCell align="left" sx={{fontSize:'15px',fontWeight:600}}>Patient Name</TableCell>
            <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Gurdain Name</TableCell>
            <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Email</TableCell>
            <TableCell align="center" sx={{fontSize:'15px',fontWeight:600}}>Phone No</TableCell>
            <TableCell align="right" sx={{fontSize:'15px',fontWeight:600}}>Reason</TableCell>
            <TableCell align="right" sx={{fontSize:'15px',fontWeight:600}}>Age</TableCell>
            <TableCell align="right" sx={{fontSize:'15px',fontWeight:600}}>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admDetail.map((post) => (
            <TableRow
              key={post.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{post.id}</TableCell>
            <TableCell align="left">{post.pname}</TableCell>
            <TableCell align="center">{post.gname}</TableCell>
            <TableCell align="center">{post.email}</TableCell>
            <TableCell align="center">{post.pnum}</TableCell>
            <TableCell align="right">{post.reason}</TableCell>
            <TableCell align="right">{post.page}</TableCell>
            <TableCell align="right">{post.add}</TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </Box>
   
       
         
    </div>
  )
}

export default PtnDetails