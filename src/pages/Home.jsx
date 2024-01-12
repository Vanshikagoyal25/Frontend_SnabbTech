import React from 'react'
import Header from '../components/Header'
import city from '../assets/city.png'
import Mission from './Mission'
import Features from './Features'

const Home = () => {
  return (
       <div className=' flex  flex-wrap flex-col w-full h-full bg-stone-300'> 
    
    <br></br>
    <div className='text-center'> 
      <h1 className='text-4xl font-semibold'>Welcome To Panda</h1>
    </div>
    <br></br>
    <Header />
    <br></br>
    <div className='text-center my-10 '>
      <h2 className='text-4xl font-bold  font-mono'>We Bring Together Experts </h2>
      <h2 className='text-4xl font-bold font-mono'>From Around the World and Organisations in Africa</h2>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


    <div className='flex flex-wrap flex-row place-items-start justify-center mt-px opacity-70 '>
    <div className='flex basis-1/4 mx-auto '>
      <article className='text-wrap text-balance'>
        <h2 className='font-semibold text-xl'>Organisations In Africa</h2>
        
        <p className='my-7'>Africa is the second-largest continent, covering about 30.2 million square kilometers.
          It is surrounded by the Mediterranean Sea to the north, the Red Sea to the northeast, the Indian Ocean to the southeast, and the Atlantic Ocean to the west.</p>
      </article>
      </div>
      <div className='flex flex-wrap relative w-11/12 max-w-[450px] justify-center basis-1/3 '>
        <img
            src={city}
            alt='patter'
            width={558}
            height={600}
            loading='lazy'
            className=' rounded-t-full opacity-90 '
            />
          <img
            src={city}
            alt='patter'
            width={558}
            height={600}
            loading='lazy'
            className=' rounded-t-full absolute -top-4 right-5 opacity-30 '
            />
      </div>
      <div className='flex basis-1/4 justify-center mx-auto'>
      <article className='text-wrap text-balance'>
        <h2 className='font-semibold text-xl'>Organisations In Africa</h2>
        
        <p className='my-7'>Africa is the second-largest continent, covering about 30.2 million square kilometers.
          It is surrounded by the Mediterranean Sea to the north, the Red Sea to the northeast, the Indian Ocean to the southeast, and the Atlantic Ocean to the west.</p>
      </article>
      </div>

      
      
    </div>
    <Mission />
    <Features />
      
    </div>
  )
}

export default Home
