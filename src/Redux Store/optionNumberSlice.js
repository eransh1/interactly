import { createSlice } from "@reduxjs/toolkit";

const initialState=0

const optionNumberSlice=createSlice({
    name:"optionNumberSlice",
    initialState,
reducers:{
    setOptionNumber:(state,action)=>{
         return action.payload
    },
   
    
}
})
export const {setOptionNumber}=optionNumberSlice.actions
export default optionNumberSlice.reducer