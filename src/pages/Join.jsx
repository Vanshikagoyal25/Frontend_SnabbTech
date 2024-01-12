import React from 'react'
import Template from './Template'
import loginImg from '../assets/loginImg.png'

const Join = ({setIsLoggedIn}) => {
  return (
    <div>
       <Template
      title="Create your Free Account"
      desc1="Takes less than 5 minutes"
      image={loginImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
      
    </div>
  )
}

export default Join
