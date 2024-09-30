import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import WAVES from 'vanta/src/vanta.waves'


const App = () => {
  
  useEffect(() => {
    const vantaEffect = WAVES({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x12254d,
      waveHeight: 22.00,
      waveSpeed: 0.40,
      zoom: 1.09
    })
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [])
  return (
    <>
    <NavBar />
    <div className='pt-16 font-montserrat w-screen h-screen' id='vanta'>
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </AnimatePresence>
    </div>
    </>
  );
}

export default App