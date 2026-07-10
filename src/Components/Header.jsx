import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser, faPlus, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = ({ toggle, setToggle, Hide, setHide }) => {
  const username = localStorage.getItem("username")
  return (
    <>
      {/* <div class="fixed top-0 left-0 w-full z-50 space-y-2 p-4">

        <div class="flex items-center justify-between p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 shadow-md" role="alert">
          <div class="flex items-center">
            <span class="font-medium">Success!</span> &nbsp; Your action was completed successfully.
          </div>
        </div>

        <div class="flex items-center justify-between p-4 mb-4 text-sm text-orange-800 border border-orange-300 rounded-lg bg-orange-50 shadow-md" role="alert">
          <div class="flex items-center">
            <span class="font-medium">Warning!</span> &nbsp; Please check your input fields before proceeding.
          </div>
        </div>

        <div class="flex items-center justify-between p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 shadow-md" role="alert">
          <div class="flex items-center">
            <span class="font-medium">Error!</span> &nbsp; Something went wrong. Please try again.
          </div>
        </div>

      </div> */}

      <nav className={`relative w-full ${toggle == true ? "bg-[#0f172a] text-white " : "bg-zinc-300 text-black "} shadow-md`}>
        <div className="mx-auto flex h-16 max-w-7xl justify-between items-center px-1">
          <section className=''>
            <div >
              <span className='flex justify-between gap-2'>
                <Link to="/" className={`${toggle == true ? "hover:bg-[#121212] text-white " : "hover:bg-zinc-50 text-zinc-700 "} p-5 cursor-pointer font-bold`}>Dashboard</Link>
                <a className={`${toggle == true ? "hover:bg-[#121212] text-white " : "hover:bg-zinc-50 text-zinc-700 "} p-5 cursor-pointer font-bold`}>Account Overview</a>
                <a className={`${toggle == true ? "hover:bg-[#121212] text-white " : "hover:bg-zinc-50 text-zinc-700 "} p-5 cursor-pointer font-bold`}>Income & Expenses</a>
                <Link to="/About" className={`${toggle == true ? "hover:bg-[#121212] text-white " : "hover:bg-zinc-50 text-zinc-700 "} p-5 cursor-pointer font-bold`}>About</Link>
              </span>
            </div>
          </section>
          <section>
            <div className='flex justify-between items-center gap-2'>
              <div className='p-1'>
                <FontAwesomeIcon icon={faPlus} className='text-3xl cursor-pointer' />
              </div>
              <div className='p-3'>
                <FontAwesomeIcon icon={faBell} className='text-3xl cursor-pointer' onClick={() => setHide(!Hide)} />
                {Hide && (<div className={`absolute w-70 h-100 rounded-2xl right-[18%] items-center-safe bg-zinc-100 text-black border-gray-400 border shadow-md flex flex-col justify-start py-2`}>
                  <p className="text-3xl font-bold font-serif p-1">
                    Notification
                  </p>

                  <hr className="border-gray-400 w-full" />

                  <div className="w-full flex-1 overflow-y-auto p-2 space-y-2">

                    <div className={`text-sm font-bold p-2 bg-zinc-100 text-black rounded shadow-sm`}>
                      Your OTP is 482913. It is valid for 10 minutes.
                    </div>
                    <div className={`text-sm font-bold p-2 bg-zinc-100 text-black rounded shadow-sm`}>
                      New update available. Tap to install now.
                    </div><div className={`text-sm font-bold p-2 bg-zinc-100 text-black rounded shadow-sm`}>
                      Your order #A1023 has been delivered successfully.
                    </div><div className={`text-sm font-bold p-2 bg-zinc-100 text-black rounded shadow-sm`}>
                      Reminder: Your meeting starts at 3:00 PM today.
                    </div><div className={`text-sm font-bold p-2 bg-zinc-100 text-black rounded shadow-sm`}>
                      You received ₹150 cashback in your wallet.
                    </div>
                    <div className={`text-sm font-bold p-2 bg-zinc-100 text-black rounded shadow-sm`}>
                      New friend request from Neha Sharma.
                    </div>

                    <div className={`text-sm font-bold p-2 bg-zinc-100 text-black rounded shadow-sm`}>
                      Low storage warning: Only 5% space remaining.
                    </div>

                    <div className={`text-sm font-bold p-2 bg-zinc-100 text-black rounded shadow-sm`}>
                      Your subscription will expire in 2 days.
                    </div>

                  </div>
                </div>)}
              </div>
              <div>
                <div className='flex p-2 gap-1'>
                  <p className='font-bold text-sm pt-1 cursor-pointer'>{username}</p>
                  <Link to="/register"><FontAwesomeIcon icon={faCircleUser} className='text-3xl cursor-pointer' onClick={() => { }} /></Link>
                </div>
                {false && (<div className={`absolute justify-self-end w-1/3 h-100 rounded-xs items-center-safe bg-zinc-700 text-black border-2 border-gray-400 shadow-md flex flex-col justify-start py-2`}>
                  <p className="text-2xl text-green-400  font-bold font-serif p-1">
                    Successfully Signed in
                  </p>
                  <hr className="border-gray-400 w-full" />
                  <div className=' w-full h-full flex justify-center items-center '>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='rounded-full object-contain text-zinc-50 text-7xl cursor-pointer hover:text-shadow-zinc-200 shadow-2xl' />
                  </div>
                </div>)}
              </div>
              <div className='w-fit h-auto flex justify-center items-center '>
                <button className={`relative w-10 h-5 rounded-full cursor-pointer bg-[#7F7F7F] border-[#7F7F7F] transition-colors duration-300 ${toggle ? "bg-green-500" : "bg-[7F7F7F]"}`} onClick={() => setToggle(!toggle)}>
                  <div className={`absolute text-white w-4 h-4 bg-white rounded-full p-1 left-0.5 top-0.5 transition-transform duration-400 ${toggle ? "translate-x-5" : "translate-x-0"}`}>
                  </div>
                </button>
              </div>
            </div>
          </section>
        </div>
      </nav>

    </>
  )
}

export default Header;