import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reg_api,login_api} from "../../Api/Api_url";
import axios from "axios";


const init_value={
    isLoading:false,
    error:null,
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
}
)
export const sign_In = createAsyncThunk("auth/login", async (userdata) => {
    const res = await axios.post(login_api, userdata, {
      headers: {
        "content-type": "application/form-data",
        "Access-control-Allow-Origin": "*",
      },
     
    });
    return res?.data;
  });
export const AuthSlice=createSlice({

    name:'auth',
    initialState:init_value,
    extraReducers:(bulider)=>
    {
        bulider.addCase(sign_Up.pending,(state,action)=>{
          console.log("pending state",state);
          state.isLoading=true;
        });

        bulider.addCase(sign_Up.fulfilled,(state,action)=>{
            console.log("pending state",state);
            state.isLoading=false;
            state.data=action.payload;
            state.error=null;
          });

          bulider.addCase(sign_Up.rejected,(state,action)=>{
            console.log("pending state",state);
            state.isLoading=false;
            state.data=[];
            state.error=action.error.message;
          });

          //For signin

          bulider.addCase(sign_In.pending, (state, action) => {
            // console.log("The panding state:",state);
            state.isLoading = true;
            // console.log("result:".action);
          });
          bulider.addCase(sign_In.fulfilled, (state, action) => {
            console.log("The fulfilled state:", state);
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null;
          });
      
          bulider.addCase(sign_In.rejected, (state, action) => {
            console.log("The rejected state:", state);
            state.isLoading = false;
            state.error = action.error.message;
          });
      
          //For profile
         
    }
})

export default AuthSlice.reducer