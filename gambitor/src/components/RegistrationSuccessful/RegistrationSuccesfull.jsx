import React from 'react'
import './RegistrationSuccessful.css'
const RegistrationSuccesfull = (props) => {
  return (
    <>
      <div className="container">
        <img src={props.img} alt="" / >
        <div className="success">
          <div id="successful">Registration Succesful</div>
          <div id="best-luck">Best of luck for Gambitor</div>
        </div>
        <button id='btn'>CONTINUE</button>
      </div>
    </>
  )
}

export default RegistrationSuccesfull
