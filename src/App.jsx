import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import { Route, Routes } from "react-router-dom"
import { useEffect } from 'react';
import Footer from "./Components/Footer.jsx";
import Register from "./Pages/Register.jsx"
import About from './Pages/About.jsx';
import Overview from './Pages/Overview.jsx';
import Income_Expenses from './Pages/Income_Expenses.jsx';
import axios from 'axios';


function App() {
  const [toggle, setToggle] = useState(false);
  const [Hide, setHide] = useState(false)
  const [Userhide, setUserhide] = useState(false)
  const [isActive, setisActive] = useState(false)
  const [Username, setUsername] = useState("");
  const [Data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const [Plus, setPlus] = useState(false)


  const financeData = async () => {
    try {
      const response = await axios.get('http://localhost:5003/finance')
      setData(response.data)

    } catch (error) {
      console.log('Some Fetching error', error)
    }
  }
  useEffect(() => {
    financeData();
  }, []);
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} Hide={Hide} setHide={setHide} Username={Username} isActive={isActive} setisActive={setisActive} open={open} setOpen={setOpen} Plus={Plus} setPlus={setPlus} />
      <Routes>
        <Route path='/' element={<Main toggle={toggle} Hide={Hide} setHide={setHide} Data={Data} />} />
        <Route path='/finance-overview' element={<Income_Expenses toggle={toggle} Hide={Hide} setHide={setHide} Data={Data} />} />
        <Route path='/overview' element={<Overview toggle={toggle} />} />
        <Route path='/register' element={<Register toggle={toggle} Username={Username} setUsername={setUsername} />} />
        <Route path='/about' element={<About toggle={toggle} />} />
      </Routes>
    </>
  )
}

export default App
