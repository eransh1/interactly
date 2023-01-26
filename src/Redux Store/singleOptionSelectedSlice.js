import { createSlice } from "@reduxjs/toolkit";

const initialState=false

const singleOptionSlectedSlice=createSlice({
    name:"singleOptionSlectedSlice",
    initialState,
reducers:{
    setSingleOptionSlectedSlice:(state,action)=>{
         return action.payload
    },
   
    
}
})
export const {setSingleOptionSlectedSlice}=singleOptionSlectedSlice.actions
export default singleOptionSlectedSlice.reducer