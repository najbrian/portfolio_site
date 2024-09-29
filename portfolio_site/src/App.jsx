import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import BlackJack from "./components/BlackJack/BlackJack";

const App = () => {

  return (
    <>
    <NavBar />
    <div className='pt-16 font-montserrat'>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/about-me' element={<AboutMe />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/blackjack' element={<BlackJack />} />
    </Routes>
    </div>
    </>
  );
}

export default App