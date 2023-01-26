import React, { useEffect, useState } from 'react'
import styles from "./Redirecting.module.css"

const Redirecting = () => {

  const[cont,setCont]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
setCont(true)
    },1500)
    setTimeout(()=>{

      window.location.href = "https://www.videoask.com/help/how-it-works/360037987151-redirect-to-a-webpage";
    },2000)
  },[])

  return (
    <>
    <div className={styles.redirectingCont}>
      {!cont?<div className={styles.cont1}>
        <div className={styles.storingCont}>Sending....</div>
        <p className={styles.warning}>Do not Refresh the Page</p>
        <p className={styles.text}>We will automatically <span className={styles.green}>redirect</span> you to our page.</p>
      </div>:null}
      {cont?<div className={styles.cont1}>
        <div className={styles.storingCont}>Redirecting....</div>
      </div>:null}
    </div>
    </>
  )
}

export default Redirecting