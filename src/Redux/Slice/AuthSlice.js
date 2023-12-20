import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reg_api,login_api,profile_api} from "../../Api/Api_url";
import axios from "axios";


const init_value={
    isLoading:false,
    error:null,
    status:0,
    data:[]
}

export const sign_Up = createAsyncThunk('auth/signup', async (userdata) => {
    const res = await axios.post(reg_api,userdata,{
        headers:{
            "Content-Type": "application/form-data",
            "Access-Control-Allow-Origin":"*",
        },
    });
    return res?.data
})



export const sign_In = createAsyncThunk("auth/login", async (userdata) => {
    const res = await axios.post(login_api, userdata, {
      headers: {
        "content-type": "application/form-data",
        "Access-control-Allow-Origin": "*",
      },
     
    });
    return res?.data;
  });



  export const profile_page=createAsyncThunk("auth/profile_page",async()=>{

    console.log("token",window.sessionStorage.getItem('tokenValue'));
    const res=await axios.get(profile_api,{
        headers:{
            "x-access-token":window.sessionStorage.getItem('tokenValue'),
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin":"*",
            },
    });
    return res?.data
});



export const AuthSlice=createSlice({

    name:'auth',
    initialState:init_value,
    extraReducers:(builder)=>
    {
      builder.addCase(sign_Up.pending,(state,action)=>{
          console.log("pending state",state);
          state.isLoading=true;
        });

        builder.addCase(sign_Up.fulfilled,(state,action)=>{
            console.log("pending state",state);
            state.isLoading=false;
            state.data=action.payload;
            state.error=null;
          });

          builder.addCase(sign_Up.rejected,(state,action)=>{
            console.log("pending state",state);
            state.isLoading=false;
            state.data=[];
            state.error=action.error.message;
          });

          //For signin

          builder.addCase(sign_In.pending, (state, action) => {
            // console.log("The panding state:",state);
            state.isLoading = true;
            // console.log("result:".action);
          });
          builder.addCase(sign_In.fulfilled, (state, action) => {
            console.log("The fulfilled state:", state);
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null;
          });
      
          builder.addCase(sign_In.rejected, (state, action) => {
            console.log("The rejected state:", state);
            state.isLoading = false;
            state.error = action.error.message;
          });
      
          //For profile
          builder.addCase(profile_page.pending,(state,action)=>{
            console.log("The panding state:",state);
            state.isLoading=true;   
            });

            builder.addCase(profile_page.fulfilled,(state,action)=>{
              console.log("The fulfilled state:",state);   
              state.isLoading=false;
              state.data=action.payload;
              state.error=null;
      
          }); 
          builder.addCase(profile_page.rejected,(state,action)=>{
            console.log("The rejected state:",state); 
            state.isLoading=false;
            state.data=[];
            state.error=action.error.message;
    
           })    
          
         
    }
})

export default AuthSlice.reducer