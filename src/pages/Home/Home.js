import React, { useEffect, useState } from 'react'
import ButtonCont from '../../components/Button Container/ButtonCont'
import VideoPlayer from '../../components/Video Player/VideoPlayer'
import styles from "./Home.module.css"
import vid1 from "../../videos/first.mp4"
import vid2 from "../../videos/second.mp4"
import vid3 from "../../videos/third.mp4"
import { useDispatch,useSelector } from 'react-redux'
import {setVideo,setOption,setVideoText} from "../../Redux Store/optionSlice"
import Form from '../../components/Form/Form'
import VideoTool from '../VideoTool/VideoTool'

const options=[{id:1,alpha:"A",name:"Campaign Structure"},{id:2,alpha:"B",name:"Learn Facebook basics"},{id:3,alpha:"C",name:"3rd choice"}]

const options1=[{id:1,name:"Download \"Campaign Structure Guide\""}]
const options2=[{id:1,name:"Sign up for free webinar"}]


const Home = () => {
    const dispatch=useDispatch()
 const[optionn,setOptionn]=useState(0)
 const[optionSelected,setOptionSelected]=useState(0)  
 const data=useSelector(state=>state.optionDoc)
 const videoAskButton=useSelector(state=>state.videoAskButton)
const[singleOptionSelected,SetSingleOptionSelected]=useState(false)

 console.log("videoAskButton",videoAskButton)
 useEffect(()=>{
  
dispatch(setVideo(vid1));
dispatch(setOption(options))
dispatch(setVideoText("Welcome"))
    
 },[])

useEffect(()=>{
    if(optionSelected===0){return}
  if(optionSelected===1){
    setTimeout(()=>{
        dispatch(setOption(options1));
        dispatch(setVideoText("Funnel 2:freebie or coaching")) 
    },400)
  }
  if(optionSelected===2){
    setTimeout(()=>{  
        dispatch(setOption(options2))
        dispatch(setVideoText("Funnel 3:Webinar Sign up")) 
    },400)
  }
  if(optionSelected===3){
    setTimeout(()=>{
        dispatch(setOption(options1))
        dispatch(setVideoText("Funnel 2:freebie or coaching")) 
       
    },400)
  }
    window.scrollBy(0, 800);

    setTimeout(()=>{
        setOptionn(1)
    },1200)
    
},[optionSelected])

  return (
   <>
   {videoAskButton?<VideoTool/>:null}
    {optionn===0?<div className={styles.outerCont}>
        <div className={styles.videoComp}>
            {data.video?<VideoPlayer video={data.video} videoText={data.videoText}/>:null}
        </div>
        <div className={styles.buttonCont}>
            {data.option?<ButtonCont options={data.option} setOptionSelected={setOptionSelected}/>:null}
        </div>
    </div>:null}

    {optionSelected===1?<div className={styles.outerCont}>
        <div className={styles.videoComp}>
            {data.video?<VideoPlayer video={data.video} videoText={data.videoText}/>:null}
        </div>
        <div className={styles.buttonCont}>
            {data.option&&!singleOptionSelected?<ButtonCont options={data.option} setOptionSelected={setOptionSelected} SetSingleOptionSelected={SetSingleOptionSelected}/>:null}
{singleOptionSelected?<Form/>:null}
        </div>
    </div>:null}
    {optionSelected===2?<div className={styles.outerCont}>
        <div className={styles.videoComp}>
            {data.video?<VideoPlayer video={data.video} videoText={data.videoText}/>:null}
        </div>
        <div className={styles.buttonCont}>
            {data.option&&!singleOptionSelected?<ButtonCont options={data.option} setOptionSelected={setOptionSelected} SetSingleOptionSelected={SetSingleOptionSelected}/>:null}
            {singleOptionSelected?<Form/>:null}
        </div>
    </div>:null}
    {optionSelected===3?<div className={styles.outerCont}>
        <div className={styles.videoComp}>
            {data.video?<VideoPlayer video={data.video} videoText={data.videoText}/>:null}
        </div>
        <div className={styles.buttonCont}>
            {data.option&&!singleOptionSelected?<ButtonCont options={data.option} setOptionSelected={setOptionSelected} SetSingleOptionSelected={SetSingleOptionSelected}/>:null}
            {singleOptionSelected?<Form/>:null}
        </div>
    </div>:null}
   </>
  )
}

export default Home