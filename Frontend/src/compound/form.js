import React, { useState } from 'react';
import './form.css'; 
// import { Link } from 'react-router-dom';
import axios from "axios"
function CollegeFeedbackForm() {
  const [formData, setFormData] = useState({
    q1: 'very-satisfied',
    q2: 'yes',
    q3: 'excellent',
    q4: 'very-satisfied',
    q5: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/a',formData)
     .then((result)=>{
      console.log(result.data);
      if(result.status===200){
        alert("success")
      }
     })
      .catch((error) => {
        console.error("Error: ", error);
      });
    
    // Handle form submission, e.g., send data to a server or process it as needed
    console.log('Form data submitted:', formData);
  };
  return (
    <div>
      <p>We value your feedback. Please take a moment to answer the following questions:</p>
      <form onSubmit={handleSubmit}>
        <ol> 
          <li>
            <label htmlFor="q1"> How satisfied are you with the quality of teaching and course content at our college?</label>
            <select style={{width:"50%"}} name="q1" id="q1"   required>
              <option value="very-satisfied">Very Satisfied</option>
              <option value="satisfied">Satisfied</option>
              <option value="neutral">Neutral</option>
              <option value="dissatisfied">Dissatisfied</option>
              <option value="very-dissatisfied">Very Dissatisfied</option>
            </select>
            </li>
            <li>
            <label> Are the faculty members easily approachable for academic help and guidance?</label>
              <div className="button-options">
              <label>
                <input type="radio" name="q2" value="yes" checked={formData.q2 === 'yes'} onChange={handleChange} required />
                Yes
              </label>
              <label>
                <input type="radio" name="q2" value="no" checked={formData.q2 === 'no'} onChange={handleChange} required />
                No
              </label>
              <label>
                <input type="radio" name="q2" value="not-sure" checked={formData.q2 === 'not-sure'} onChange={handleChange} required />
                Not Sure
              </label>
            </div>
          </li>
          <li>
            <label> How would you rate the availability and quality of college facilities, such as libraries, labs, and recreational areas?</label>
            <div className="button-options">
              <label>
                <input type="radio" name="q3" value="excellent" checked={formData.q3 === 'excellent'} onChange={handleChange} required />
                Excellent
              </label>
              <label>
                <input type="radio" name="q3" value="good" checked={formData.q3 === 'good'} onChange={handleChange} required />
                Good
              </label>
              <label>
                <input type="radio" name="q3" value="fair" checked={formData.q3 === 'fair'} onChange={handleChange} required />
                Fair
              </label>
              <label>
                <input type="radio" name="q3" value="poor" checked={formData.q3 === 'poor'} onChange={handleChange} required />
                Poor
              </label>
            </div>
          </li>
          <li>
            <label> How satisfied are you with the administrative services and response time for resolving issues or concerns?</label>
            <div className="button-options">
              <label>
                <input type="radio" name="q4" value="very-satisfied" checked={formData.q4 === 'very-satisfied'} onChange={handleChange} required />
                Very Satisfied
              </label>
              <label>
                <input type="radio" name="q4" value="satisfied" checked={formData.q4 === 'satisfied'} onChange={handleChange} required />
                Satisfied
              </label>
              <label>
                <input type="radio" name="q4" value="neutral" checked={formData.q4 === 'neutral'} onChange={handleChange} required />
                Neutral
              </label>
              <label>
                <input type="radio" name="q4" value="dissatisfied" checked={formData.q4 === 'dissatisfied'} onChange={handleChange} required />
                Dissatisfied
              </label>
              <label>
                <input type="radio" name="q4" value="very-dissatisfied" checked={formData.q4 === 'very-dissatisfied'} onChange={handleChange} required />
                Very Dissatisfied
              </label>
            </div>
          </li>
          <li>
            <label htmlFor="q5"> What suggestions or comments do you have for improving the overall college experience?</label> <br />
            <textarea style={{height:'100px',width:"50%"}} name="q5" id="q5" rows="4" value={formData.q5} onChange={handleChange} required></textarea>
          </li>
        </ol>
        <input id='n' type="submit" value="Submit Feedback" />
      </form>
    {/* <a href='/Ndpsir'><button style={{backgroundColor:'white',color:'Black',marginLeft:'80%'}} >Next</button></a> */}
    </div>
  );
}
export default CollegeFeedbackForm;

