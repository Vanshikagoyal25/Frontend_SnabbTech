import React from 'react'
// import { Link } from 'react-scroll'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <ul className='flex gap-4 font-sm '>
        <li>
            <Link to="/mission" > Panda missions</Link>
            </li>
        <li>Features</li>
        <li>Experts</li>
        <li>Organisations</li>
        <li>Jobs</li>
        <li>Events</li>
        <li>Testimonial</li>
        <li>Founders</li>


      </ul>
    </div>
  )
}

export default Header
