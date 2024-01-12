import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={logo} height={52} width={180} loading='lazy' />
        </Link>
    <nav>
      <ul className="flex gap-x-6 text-richblack-100 ">
        <li className='hover:text-sky-700'>
            <Link to="/">Home</Link>
        </li>
        <li  className='hover:text-sky-700'>
            <Link to="/join">Join</Link>
        </li>  
        <li  className='hover:text-sky-700'>
            <Link to="/signin">SignIn</Link>
        </li>   
     </ul>
     </nav>
    </div>
  )
}

export default Navbar
