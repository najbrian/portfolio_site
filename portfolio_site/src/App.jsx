import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import { AnimatePresence } from "framer-motion";

const App = () => {

  return (
    <>
    <NavBar />
    <div className='pt-16 font-montserrat'>
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