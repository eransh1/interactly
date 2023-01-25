import { createSlice } from "@reduxjs/toolkit";

const initialState={video:null,option:null,videoText:null}

const optionSlice=createSlice({
    name:"optionSlice",
    initialState,
reducers:{
    setVideo:(state,action)=>{
         state.video=action.payload
    },
    setOption:(state,action)=>{
 state.option=action.payload
    },
    setVideoText:(state,action)=>{
        state.videoText=action.payload
           },
    
}
})
export const {setVideo,setOption,setVideoText}=optionSlice.actions
export default optionSlice.reducer