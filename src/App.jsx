import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import {Route,Routes} from "react-router-dom"

import Footer from "./Components/Footer.jsx";
import SignupPage from "./Pages/SignupPage.jsx"

function App() {
  const [toggle, setToggle] = useState(false);
  const [Hide,setHide] = useState(false)

  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} Hide={Hide} setHide={setHide}/>
    <Routes>
      <Route path='/' element={<Main toggle={toggle} Hide={Hide} setHide={setHide}/>}/>
      <Route path='/Signup' element={<SignupPage/>}/>
      {/* <Route/>
      <Route/> */}
      </Routes>
    </>
  )
}

export default App
