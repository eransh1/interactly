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
import {setOptionNumber} from "../../Redux Store/optionNumberSlice"


const options=[{id:1,alpha:"A",name:"Campaign Structure"},{id:2,alpha:"B",name:"Learn Facebook basics"},{id:3,alpha:"C",name:"3rd choice"}]

const options1=[{id:1,name:"Download \"Campaign Structure Guide\""}]
const options2=[{id:1,name:"Sign up for free webinar"}]


const Home = () => {
    const dispatch=useDispatch()
    const [width, setWidth] = useState(window.innerWidth);

const optionSelected=useSelector((state)=>state.optionSelected)
const singleOptionSelected=useSelector((state)=>state.singleOptionSelected)
const optionn=useSelector((state)=>state.optionNumber)
 const data=useSelector(state=>state.optionDoc)
 const videoAskButton=useSelector(state=>state.videoAskButton)




const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
        dispatch(setOptionNumber(1))
       
    },1200)
    
},[optionSelected])

  return (
   <>

   {width<1024&&singleOptionSelected?
    <div className={styles.mobileForm}>
            <Form/>
    </div>:null}
   {videoAskButton?
    <div className={styles.videoToolCont}>
   <VideoTool/>
   </div>
   :null}

    {optionn===0?<div className={styles.outerCont}>
        <div className={styles.videoComp}>
            {data.video?<VideoPlayer />:null}
            
        </div>
        <div className={styles.buttonCont}>
            {data.option?<ButtonCont />:null}
        </div>
    </div>:null}

    {optionSelected===1?<div className={styles.outerCont}>
        <div className={styles.videoComp}>
            {data.video?<VideoPlayer />:null}
        </div>
        <div className={styles.buttonCont}>
            {data.option&&!singleOptionSelected?<ButtonCont  />:null}
{singleOptionSelected?<Form/>:null}
        </div>
    </div>:null}
    {optionSelected===2?<div className={styles.outerCont}>
        <div className={styles.videoComp}>
            {data.video?<VideoPlayer />:null}
        </div>
        <div className={styles.buttonCont}>
            {data.option&&!singleOptionSelected?<ButtonCont  />:null}
            {singleOptionSelected?<Form/>:null}
        </div>
    </div>:null}
    {optionSelected===3?<div className={styles.outerCont}>
        <div className={styles.videoComp}>
            {data.video?<VideoPlayer />:null}
        </div>
        <div className={styles.buttonCont}>
            {data.option&&!singleOptionSelected?<ButtonCont  />:null}
            {singleOptionSelected?
            <Form/>
            :null}
        </div>
    </div>:null}
    
   </>
  )
}

export default Home