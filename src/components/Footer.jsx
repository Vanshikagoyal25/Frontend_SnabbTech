import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
       <footer className="bg-stone-400 text-white p-4">
      <div className="flex justify-center items-center">
        <div className="mr-4">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </div>
        <div>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </div>
      </div>
      <div className="mt-2 text-center">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
        <p>Address: Delhi, India</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
