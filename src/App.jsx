import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import { Route, Routes } from "react-router-dom"

import Footer from "./Components/Footer.jsx";
import Register from "./Pages/Register.jsx"
import About from './Pages/About.jsx';
import Account_Overview from './Pages/Account_Overview.jsx';
import Income_Expenses from './Pages/Income_Expenses.jsx';


function App() {
  const [toggle, setToggle] = useState(false);
  const [Hide, setHide] = useState(false)
  const [Userhide, setUserhide] = useState(false)
  const [isActive, setisActive] = useState(false)
  const [Username, setUsername] = useState("")
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} Hide={Hide} setHide={setHide} Username={Username} isActive={isActive} setisActive={setisActive} />
      <Routes>
        <Route path='/' element={<Main toggle={toggle} Hide={Hide} setHide={setHide} />} />
        <Route path='/finance-overview' element={<Income_Expenses toggle={toggle} Hide={Hide} setHide={setHide} />} />
        <Route path='/account-overview' element={<Account_Overview/>}/>
        <Route path='/register' element={<Register toggle={toggle} Username={Username} setUsername={setUsername} />} />
        <Route path='/about' element={<About toggle={toggle} />} />
      </Routes>
    </>
  )
}

export default App
