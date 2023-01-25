import { createSlice } from "@reduxjs/toolkit";

const initialState=false

const videoAskButtonSlice=createSlice({
    name:"optionSlice",
    initialState,
reducers:{
    setButton:(state,action)=>{
         return action.payload
    },
   
    
}
})
export const {setButton}=videoAskButtonSlice.actions
export default videoAskButtonSlice.reducer