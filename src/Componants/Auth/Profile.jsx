
import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import { profile_page } from '../../Redux/Slice/AuthSlice';
import "../../StyleComponants/Auth_style/Profile.css"

const Profile = () => {

// let Profile_api="https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";

// let valid_token=window.sessionStorage.getItem("tokenvalue");
// console.log("collected token",valid_token);

let dispatch=useDispatch()

let [single_user,setUser]=useState({
  first_name:"",last_name:"",email:"",register_type:"",profile_pic:""
})

useEffect(()=>{

  dispatch(profile_page())
  .then(res=>{
    console.log("Get value for profile",res);
    
      let base_url = "https://wtsacademy.dedicateddevelopers.us/";
      let folder_path = "uploads/user/profile_pic/";
      let img_url = base_url + folder_path + res.payload.data.profile_pic;
      
     

      // setUser({...res.payload.data,profile_pic:img_url})

    setUser({...single_user,
      first_name:res.payload.data.first_name,
     last_name:res.payload.data.last_name,
      email:res.payload.data.email,
     profile_pic:img_url
 })

   
  
    

  })
  .catch(err=>{
    console.log("error",err);
  })
  
  // .then(res=>{
  //       console.log(res.data.data.first_name);
  //       if(res.data.status === 200){

  //         let base_url = "https://wtsacademy.dedicateddevelopers.us/";
  //         let folder_path = "uploads/user/profile_pic/";
  //         let img_url = base_url + folder_path + res.data.data.profile_pic;
  //         window.localStorage.setItem('profile_image',img_url)

  //           // setUser({...res.data.data,img_url})
  //           // setUser({img_url})
  //           setUser({...single_user,
  //           first_name:res.data.data.first_name,
  //           last_name:res.data.data.last_name,
  //           email:res.data.data.email,
  //           profile_pic:img_url
  //           })

  //       }
  //       else{    }
  // })
  
  // .catch(err=>{
  //   console.log("error",err);
  // })

},[dispatch])



  return (
    <div>
        <h1 id='profile_head'>PROFILE PAGE</h1>
     <div className="profile_page">
        
        <h1><span>First Name:</span>{single_user.first_name}</h1> 
        <h1><span>Last Name:</span>{single_user.last_name}</h1>
        <h1><span>Email:</span>{single_user.email}</h1>
    </div> 
    
     
    
    <img id='profile_pic' src={single_user.profile_pic} alt="" />
    
      
    </div>
  )
}

export default Profile