import React from 'react'
import './form.css'; 
import CollegeFeedbackForm from './form';
export default function Ndpsir() {
  return (
    <>
    <div>
         <h1>College Feedback Form</h1>
         <hr />
         <h4>NAME : N.DURGAPRASAD</h4>
         <h4>COURSE : FRONTEND</h4>
         <h4>BRANCH : TECHNICAL-HUB</h4>
         <hr />
    </div>
    <CollegeFeedbackForm/>
    <a href='/Jdp'><button style={{backgroundColor:'white',color:'Black',marginLeft:'80%'}} >Next</button></a>

    </>
  )
}
