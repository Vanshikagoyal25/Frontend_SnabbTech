import React from 'react'
import { PiAsteriskSimpleThin } from "react-icons/pi";
import map from '../assets/map.png'


const Features = () => {
  return (
    <div className='mt-40 px-10'>
      <h1 className='font-bold text-4xl '>Features</h1>
   <div className='flex mt-20' >
    
    
    
    <div className='flex flex-1 grid grid-cols-3 '>
      <div className='flex-1 justify-center shadow-2xl rounded-t-[50px] border-t-4 border border-t-rose-500 mx-2 my-3'>
      
      <h2 className='mx-20 mt-10'><PiAsteriskSimpleThin /></h2>
      <h2 className=' px-10 py-2 font-semibold'>Publications</h2>

      <p className='px-2 text-sm text-center pt-3'> It has a mixed economy with agriculture, mining, and manufacturing sectors.
         </p>


        </div>
      <div className='flex-1 justify-center shadow-2xl rounded-t-[50px] border border-t-4 border-t-rose-500 mx-2 my-3'>
      <h2 className='px-20 py-7 text-2xl'><PiAsteriskSimpleThin /></h2>
      <h2 className=' px-10 py-2 font-semibold'>Publications</h2>
      <p className='px-2 text-sm text-center pt-3'> It has a mixed economy with agriculture, mining, and manufacturing sectors.
         </p>

        </div>
      <div className='flex-1 justify-center shadow-2xl  rounded-t-[50px] border border-t-4 border-t-rose-500 mx-2 my-3'>
      <h2 className='mx-20 my-10'><PiAsteriskSimpleThin /></h2>

      <h2 className=' px-10 py-2 font-semibold'>Publications</h2>
      <p className='px-2 text-sm text-center pt-3'> It has a mixed economy with agriculture, mining, and manufacturing sectors.
         </p>


        </div>
      <div className='flex-1 justify-center shadow-2xl  rounded-b-[50px] border border-b-4 border-b-rose-500 mx-2 my-3'>
      <h2 className='mx-20 mt-7 text-2xl'><PiAsteriskSimpleThin /></h2>

      <h2 className=' px-10 py-2 font-semibold'>Publications</h2>
      <p className='px-2 text-sm text-center pt-3'> It has a mixed economy with agriculture, mining, and manufacturing sectors.
         </p>


        </div>
      <div className='flex-1 justify-center rounded-b-[50px] shadow-2xl border border-b-4 border-b-rose-500 mx-2 my-3'>
      <h2 className='mx-20 mt-7 text-2xl'><PiAsteriskSimpleThin /></h2>
      <article className='text-balance text-align-center'>
      <h2 className=' px-10 py-2 font-semibold'>Publications</h2>
      <p className='px-2 text-sm text-center pb-7'> It has a mixed economy with agriculture, mining, and manufacturing sectors.
         </p>
         </article>

        </div>


    </div>
    <div className="flex-1  relative w-11/12 max-w-[700px] px-10 justify-center">
       
       <img
         src={map}
         alt="patter"
         width={560}
         height={550}
        
         loading="lazy"
         className="  pl-10 bg-"
       />
       

     </div>
    </div>

    </div>
  )
}

export default Features
