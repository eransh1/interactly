import { createSlice } from "@reduxjs/toolkit";

const initialState=0

const optionSlectedSlice=createSlice({
    name:"optionSlectedSlice",
    initialState,
reducers:{
    setOptionSelected:(state,action)=>{
         return action.payload
    },
   
    
}
})
export const {setOptionSelected}=optionSlectedSlice.actions
export default optionSlectedSlice.reducer