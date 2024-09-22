import React from 'react'
import './form.css'; 
import CollegeFeedbackForm from './form';
export default function Mavin() {
  return (
    <div>
 <>
    <div>
         <h1>College Feedback Form</h1>
         <hr />
         <h4>NAME : Mavin</h4>
         <h4>COURSE :INTERN </h4>
         <h4>BRANCH : TECHNICAL-HUB</h4>
         <hr />
    </div>
    <CollegeFeedbackForm/>
    <a href='/Prasuna'><button style={{backgroundColor:'white',color:'Black',marginLeft:'80%'}} >Next</button></a><br />
    <a href='/Simhadri'><button style={{backgroundColor:'white',color:'Black',marginLeft:'0%'}} >Pre</button></a>

    </>
    </div>
  )
}
