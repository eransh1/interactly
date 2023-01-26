import React, { useEffect, useState } from 'react'
import styles from "./Style.module.css"
import PlayButton from '../PlayButton'
import FullScreenButton from '../FullScreenButton'
import { useDispatch, useSelector } from 'react-redux'
import {setButton} from "../../Redux Store/videoAskButtonSlice"
import ButtonCont from '../Button Container/ButtonCont'
import {setOptionNumber} from "../../Redux Store/optionNumberSlice"


const VideoPlayer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.optionDoc)
 
const[muted,setMuted]=useState(true)
const[playButtonDisplay,setPlayButtonDisplay]=useState(true)
const[timer,setTimer]=useState(0)
const[videoCurrentTime,setVideoCurrentTime]=useState(0)
const[videoTotalTime,setVideoTotalTime]=useState(0)
const[playBackSpeed,setPlayBackSpeed]=useState(1)
const[videoStarted,setVideoStarted]=useState(false)
const[videoTextt,setVideoTextt]=useState(true)

const updateWidth = () => {
  setWidth(window.innerWidth);
};

useEffect(() => {
  window.addEventListener("resize", updateWidth);
  return () => window.removeEventListener("resize", updateWidth);
}, []);

useEffect(()=>{
  console.log("data.video[0].alpha",data.option[0].alpha)
if(data.option[0].alpha===undefined){setTimeout(()=>{
  handleVideoClick()
},800)}
},[data])

const handleVideoClick=(e)=>{
  let myVideo=document.getElementById("video0")
  setVideoTotalTime(Math.floor(myVideo.duration))
  setVideoStarted(true)
 let idd=setInterval(()=>{
  setVideoCurrentTime(Math.floor(myVideo.currentTime))
 },500)
 setVideoTextt(e=>!e)
  if(timer===0){myVideo.currentTime = 0;}
  setTimer(1)
  if(playButtonDisplay===true){setPlayButtonDisplay(false)}
 else{setPlayButtonDisplay(true)}
 if(muted===false){setMuted(true)}
  else{setMuted(false)}
if(muted===false){myVideo.pause()}
else {myVideo.play()}

}

//HANDLE VIDEO SPEED
const handleVideoSpeed=(e)=>{
e.stopPropagation()
let myVideo=document.getElementById("video0")
  if(playBackSpeed===1){setPlayBackSpeed(1.5);myVideo.playbackRate=1.5;return}
  if(playBackSpeed===1.5){setPlayBackSpeed(2);myVideo.playbackRate=2;return;}
  if(playBackSpeed===2){setPlayBackSpeed(1);myVideo.playbackRate=1;return}
 
}

//HANDLE FULL SCREEN
const handleFullScreen=(e)=>{
  // e.stopPropagation()
  let elem=document.getElementById("video0")

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

  return (
    <>
      <div onClick={handleVideoClick} className={styles.outerCont}>
      <div className={styles.blackShadow}></div>
      {videoTextt?<h1 className={styles.heading}>{data.videoText}</h1>:null}
{width<1024?<div className={styles.mobileBtnCont}>
{data.option?<ButtonCont />:null}
</div>:null}
     {videoStarted?<div className={styles.videoTools}>
        <p className={styles.timerText}>{`00:${videoCurrentTime<10?"0"+videoCurrentTime:videoCurrentTime} / 00:${videoTotalTime<10?"0"+videoTotalTime:videoTotalTime}`}</p>
        <span onClick={handleVideoSpeed} className={playBackSpeed===1?styles.playBackSpeed:styles.playBackSpeedSelect}>{playBackSpeed}x</span>
        <span onClick={handleFullScreen} className={styles.fullScreen}><FullScreenButton/></span>
      </div>:null}
      <video id='video0' className={styles.video} autoPlay loop muted={muted}>
      <source src={data.video} type="video/mp4"/>
      </video>
      <div style={{display:playButtonDisplay?"block":"none"}} className={styles.playButton}><PlayButton/></div>
      <button onClick={(e)=>{e.stopPropagation();dispatch(setButton(true))}} className={styles.videoAskBtn}><span className={styles.btnSubText}>Powered by: <br /><span className={styles.btnText}>videoask</span></span></button>
      </div>
    </>
  )
}

export default VideoPlayer