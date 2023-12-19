import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Slice/AuthSlice";



const Store=configureStore({
    reducer:{
        Registration:AuthReducer
    }
})

export default Store