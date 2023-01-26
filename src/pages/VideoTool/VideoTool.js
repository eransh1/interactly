import React, {useState, useEffect } from 'react'
import styles from "./VideoTool.module.css"
import img from "../../images/1.png"
import { useDispatch } from 'react-redux'
import {setButton} from "../../Redux Store/videoAskButtonSlice"

const VideoTool = () => {
  const dispatch=useDispatch()
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(()=>{
document.addEventListener('keydown',handleCloseContKey,true)
  },[])

  const handleCloseCont=()=>{
dispatch(setButton(false))

  }

  const handleCloseContKey=(e)=>{
    console.log(e.key)
    if(e.key === "Escape"){dispatch(setButton(false))}
  }

  return (
  <>
    <div className={styles.outerCont}>
<div className={styles.leftCont}>
  <div className={styles.innerCont}>
    <h1 className={styles.heading}>THE VIDEO TOOL YOU’VE BEEN WAITING FOR</h1>
    <p className={styles.subHeading}>Scale personalized videos, form deeper relationships, and supercharge your lead conversion process.</p>
    <a href='https://app.videoask.com/app/signup?utm_campaign=fh6wa9vd1&utm_content=videoask_poweredby&utm_medium=videoask&utm_source=videoask.com' target="_blank" className={styles.tryBtn}><span>Try VideoAsk for free</span></a>
  </div>
</div>
<div className={styles.rightCont}>
<div className={styles.imgCont}>
  <img className={styles.image} src={img} alt="img" />
</div>
</div>
<div onClick={handleCloseCont} className={styles.closeIcon}>
  <span className={styles.icon}>X</span>
  <span className={styles.text}>ESC</span>
</div>
    </div>
  </>
  )
}

export default VideoTool