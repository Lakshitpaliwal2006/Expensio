import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [Show,setHide] = useState(false);
  return (
    // its First Navbar and also is use for default purpose <nav className="w-full bg-zinc-300 shadow-md">
    <nav className="w-full bg-[#0f172a] text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl justify-between items-center px-1">
        <section className=''>
          <div >
            <span className='flex justify-between gap-2'>
              <a className='hover:bg-[#34d399] p-5 cursor-pointer'>Dashboard</a>
              <a className='hover:bg-[#34d399] p-5 cursor-pointer'>Account Overview</a>
              <a className='hover:bg-[#34d399] p-5 cursor-pointer'>Income & Expenses</a>
              <a className='hover:bg-[#34d399] p-5 cursor-pointer'>About</a>
            </span>
          </div>
        </section>
        <section>
          <div className='flex justify-between items-center '>
            <div className='p-1'>
              <FontAwesomeIcon icon={faPlus} className='text-3xl' />
            </div>
            <div className=' p-2'>
              <FontAwesomeIcon icon={faBell} className='text-3xl' />
            </div>
            <div className='flex p-2 gap-1'>
              <p className='text-white font-bold text-sm pt-1'>Name</p>
              <FontAwesomeIcon icon={faCircleUser} className='text-3xl' />
              {Show && (
                <AnimateView transition={{ type: spring }}>
                  <div className="modal" />
                </AnimateView>
              )}
              <button></button>
            </div>
          </div>
        </section>
      </div>
    </nav>

  )
}

export default Header;