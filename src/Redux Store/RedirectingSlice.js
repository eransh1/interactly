import { createSlice } from "@reduxjs/toolkit";

const initialState=false

const redirectingSlice=createSlice({
    name:"redirectingSlice",
    initialState,
reducers:{
    setRedirecting:(state,action)=>{
         return action.payload
    },
   
    
}
})
export const {setRedirecting}=redirectingSlice.actions
export default redirectingSlice.reducer