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
import { toast, Toaster } from 'sonner';


function App() {
  const financeData = async () => {
    try {
      const response = await axios.get('http://localhost:3050/finance')
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
      {/* <button onClick={() => toast.success('register')}>Click</button> */}
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/finance-overview' element={<Income_Expenses />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
