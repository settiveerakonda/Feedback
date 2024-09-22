import React from 'react'
import './form.css'; 
import CollegeFeedbackForm from './form';
export default function Prasuna() {
  return (
    <div>
 <>
    <div>
         <h1>College Feedback Form</h1>
         <hr />
         <h4>NAME : Rakha</h4>
         <h4>COURSE :INTERN </h4>
         <h4>BRANCH : TECHNICAL-HUB</h4>
         <hr />
    </div>
    <CollegeFeedbackForm/>
    <a href='/Dp'><button style={{backgroundColor:'white',color:'Black',marginLeft:'0%'}} >Pre</button></a>
    {/* <input id='n' type="submit" value="Submit Feedback" /> */}
    </>
    </div>
  )
}