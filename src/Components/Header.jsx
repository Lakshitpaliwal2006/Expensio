import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser, faPlus, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ toggle, setToggle, Hide, setHide, isActive, setisActive, open, setOpen }) => {
  const username = localStorage.getItem("username")
  const location = useLocation()

  return (
    <>

      <nav className={`relative w-full ${toggle == true ? "bg-[#0f172a] text-white " : "bg-purple-600 text-black "} shadow-md`}>
        <div className="mx-auto flex h-fit max-w-7xl justify-between items-center px-1">
          <section className=''>
            <div >
              <span className='flex justify-between'>
                <Link to="/" className={`${toggle ? location.pathname === "/" ? "bg-[#121212] text-white" : "hover:bg-[#121212] text-white" : location.pathname === "/" ? "bg-zinc-100 text-zinc-700" : "hover:bg-zinc-50 text-zinc-900"} p-5 cursor-pointer font-bold text-sm flex items-center`}>Dashboard</Link>
                <Link to="/finance-overview" className={`${toggle ? location.pathname === "/finance-overview" ? "bg-[#121212] text-white" : "hover:bg-[#121212] text-white" : location.pathname === "/finance-overview" ? "bg-zinc-100 text-zinc-700" : "hover:bg-zinc-50 text-zinc-900"} p-5 cursor-pointer font-bold text-sm flex items-center`}>Income & Expenses</Link>
                <Link to="/overview" className={`${toggle ? location.pathname === "/account-overview" ? "bg-[#121212] text-white" : "hover:bg-[#121212] text-white" : location.pathname === "/account-overview" ? "bg-zinc-100 text-zinc-700" : "hover:bg-zinc-50 text-zinc-900"} p-5 cursor-pointer font-bold text-sm flex items-center`}>Account Overview</Link>
                <Link to="/about" className={`${toggle ? location.pathname === "/about" ? "bg-[#121212] text-white" : "hover:bg-[#121212] text-white" : location.pathname === "/about" ? "bg-zinc-100 text-zinc-700" : "hover:bg-zinc-50 text-zinc-900"} p-5 cursor-pointer font-bold text-sm flex items-center`}>About</Link>
              </span>
            </div>
          </section>
          <section>
            <div className='flex justify-between items-center gap-2'>
              {location.pathname == "/finance-overview" && <div className="top-6 left-1/2 -translate-x-1/2 w-[90%] z-50">
                <div className="flex items-center justify-between">
                  <ul className="flex items-center gap-10 text-white">
                    <li className="">
                      {/* Form Data */}
                      <button onClick={() => setOpen(!open)} className=" p-3 transition" >
                        <FontAwesomeIcon icon={faPlus} className={`${open ? "rotate-45 text-emerald-400" : "text-white"} text-3xl cursor-pointer`} />
                      </button>

                      <div
                        className={`absolute left-0 top-full mt-4 w-80 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl p-5 transition-all duration-300 ${open
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                          }`}
                      >
                        <form className="space-y-4">
                          <div>
                            <label className="block text-sm mb-2 text-gray-300">
                              Date
                            </label>
                            <input
                              type="date"
                              className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-600 text-white outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-sm mb-2 text-gray-300">
                              Transaction Type
                            </label>

                            <div className="flex gap-6">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="radio"
                                  name="type"
                                  value="income"
                                  className="accent-green-500"
                                />
                                <span>Income</span>
                              </label>

                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="radio"
                                  name="type"
                                  value="expense"
                                  className="accent-red-500"
                                />
                                <span>Expense</span>
                              </label>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm mb-2 text-gray-300">
                              Category
                            </label>
                            <select className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-600 text-white outline-none">
                              <option value="">Select Category</option>
                              <option value="food"> Food</option>
                              <option value="travel"> Travel</option>
                              <option value="shopping"> Shopping</option>
                              <option value="salary">Salary</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm mb-2 text-gray-300">
                              Amount
                            </label>
                            <input
                              type="number"
                              placeholder="₹ Enter Amount"
                              className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-600 text-white outline-none"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition"
                          >
                            Save Transaction
                          </button>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>}
              <div className='p-3'>
                <FontAwesomeIcon icon={faBell} className='text-3xl text-white cursor-pointer' onClick={() => setHide(!Hide)} />
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
                  <Link to="/register"><FontAwesomeIcon icon={faCircleUser} className='text-3xl cursor-pointer text-white' onClick={() => { setSignedIn(!SignedIn) }} /></Link>
                </div>
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
      {/* <div className="absolute w-1/4 h-[50vw] max-h-96 bg-gray-200 right-0 rounded-xl p-5 text-center shadow-zinc-400 shadow-2xs items-center text-2xl font-bold text-green-500">Signed In</div> */}
    </>
  )
}

export default Header;