import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVideo } from '../../Redux Store/optionSlice'
import styles from "./style.module.css"
import vid1 from "../../videos/first.mp4"
import vid2 from "../../videos/second.mp4"
import vid3 from "../../videos/third.mp4"
import {setOptionSelected} from "../../Redux Store/optionSelectedSlice"
import {setSingleOptionSlectedSlice} from "../../Redux Store/singleOptionSelectedSlice"

const ButtonCont = () => {
const dispatch=useDispatch()
const data=useSelector((state)=>state.optionDoc)
  const handleOptionClick=(item)=>{
   
    if(item.alpha){
let elem=document.getElementById(`${item.id}`)
if(item.id===1){dispatch(setVideo(vid2))}
if(item.id===2){dispatch(setVideo(vid3))}
if(item.id===3){dispatch(setVideo(vid1))}

let idd=setInterval(()=>{
  elem.classList.toggle(`${styles.btnSelected}`)
},100)
  
setTimeout(() => {
  clearInterval(idd)
  dispatch(setOptionSelected(item.id))
}, 400);
    }
    if(!item.alpha){
      dispatch(setSingleOptionSlectedSlice(true))
    }
  }
   

  return (
    <>
      <div style={{marginLeft:"-1rem",marginBottom:"3rem"}} className={styles.outerCont}>
        {data.option.map((item)=>{
          return <>
          <div onClick={()=>handleOptionClick(item)} id={item.id} className={!item.alpha?styles.btnSingleSelected:styles.btn} key={item.alpha}>
         {item.alpha?<span className={styles.alpha}>{item.alpha}</span>:null} 
          <span className={styles.heading}>{item.name}</span>
        </div>
          </>
        })}
      </div>
    </>
  )
}

export default ButtonCont