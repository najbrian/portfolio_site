import { Link, useNavigate } from "react-router-dom";
import React from 'react'


const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className='font-montserrat bg-pastelBrown fixed top-0 w-full z-50 flex'>
      <div className='font-montserrat bg-pastelBrown fixed top-0 w-full z-50 flex justify-between items-center h-16'>
        <div className='bg-black flex items-center h-full'>
          <h1 onClick={() => {navigate('/')}} className='text-3xl font-bold ml-5 mr-5 text-pastelBrown hover:animate-spin cursor-pointer'>BN</h1>
        </div>

        <div className="flex justify-center items-center gap-5 mr-5">
          <Link className="text-3xl hover:animate-jump hover:font-bold transition duration-300" to="/">Home</Link>
          <Link className="text-3xl hover:animate-jump hover:font-bold transition duration-300" to="/about-me">About Me</Link>
          <Link className="text-3xl hover:animate-jump hover:font-bold transition duration-300" to='/projects'>Projects</Link>
          <Link className="text-3xl hover:animate-jump hover:font-bold transition duration-300">Contacts</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;