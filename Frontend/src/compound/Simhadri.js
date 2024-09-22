import React from 'react'
import './form.css'; 
import CollegeFeedbackForm from './form';
export default function Simhadri() {
  return (
    <div>
             <>
    <div>
         <h1>College Feedback Form</h1>
         <hr />
         <h4>NAME : Simhadri</h4>
         <h4>COURSE : BACKEND</h4>
         <h4>BRANCH : TECHNICAL-HUB</h4>
         <hr />
    </div>
    <CollegeFeedbackForm/>
    <a href='/Mavin'><button style={{backgroundColor:'white',color:'Black',marginLeft:'80%'}} >Next</button></a><br />
    <a href='/Jdp'><button style={{backgroundColor:'white',color:'Black',marginLeft:'0%'}} >Pre</button></a>

    </>
    </div>
  )
}
