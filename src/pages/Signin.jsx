import React from 'react'
import Template from './Template'
import loginImg from '../assets/loginImg.png'

const Signin = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
      title="Sign in"
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  )
}

export default Signin
