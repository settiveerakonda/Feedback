import React from 'react'
import './form.css'; 
import CollegeFeedbackForm from './form';
export default function jdp() {
  return (
    <div>
        <>
    <div>
         <h1>College Feedback Form</h1>
         <hr/>
         <h4>NAME : J.DURGAPRASAD</h4>
         <h4>COURSE : BACKEND</h4>
         <h4>BRANCH : TECHNICAL-HUB</h4>
         <hr />
    </div>
    <CollegeFeedbackForm/>
    <a href='/Simhadri'><button style={{backgroundColor:'white',color:'Black',marginLeft:'80%'}} >Next</button></a><br />
    <a href='/'><button style={{backgroundColor:'white',color:'Black',marginLeft:'0%'}} >Pre</button></a>
    </>
    </div>
  )
}
