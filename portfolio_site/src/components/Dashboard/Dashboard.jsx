import { useRef } from 'react'
import * as React from 'react';

import Transition from '../../Transition/transition';



const Dashboard = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  
  return (
    <>
      <div className='mt-44 flex-col justify-center text-left ml-40 text-white'>
        <h1 className='text-clamped2 mb-3 relative animate-fadeLeft'>Hello! My name is</h1>
        <h1 className='text-clamped mb-5 relative animate-fadeRight'><strong>Brian Na</strong></h1>
        <h1 className='text-clamped2 relative animate-fadeLeft'>I am a <strong className='text-clamped'>full stack software dev.</strong></h1>
      </div>
    </>
  )
}


export default Transition(Dashboard)