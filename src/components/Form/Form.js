import React, { useState } from 'react'
import styles from "./Form.module.css"
import tic from "../../images/tick.png"
import { useSelector,useDispatch } from 'react-redux'
import {setRedirecting} from "../../Redux Store/RedirectingSlice"
import { useNavigate } from 'react-router-dom'


const Form = () => {
  const [checked,setChecked]=useState(false)
  const navigate=useNavigate()
const dispatch=useDispatch()
const handleFormSubmit=(e)=>{
e.preventDefault()
navigate("/redirect")

}

  return (
   <>
   <div className={styles.form}>
   <form onSubmit={handleFormSubmit}>
    <p className={styles.heading}>Before you go, please leave your contact details so we can get back to you...</p>
    <input type="text" name='name' className={styles.input} placeholder="*Your Name" required />
    <input type="email" name='email' className={styles.input} placeholder="*Your Email" required />
    <div className={styles.infoCont}>
    <input type="checkbox" className={styles.checkbox} checked={checked} required />
    <div className={styles.checkboxCont}>
    <div onClick={()=>{setChecked(e=>!e)}} className={styles.ticBoc}>
    {checked?<img className={styles.tic} src={tic} alt="tic" />:null}
    </div>
    </div>
    <span className={styles.disclamer}>* [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.</span>
    </div>

    <button className={styles.submitBtn} type='submit'>Send your answer  <span>⟶</span></button>
    </form>
    </div>
   </>
  )
}

export default Form
