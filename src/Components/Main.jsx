import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faCoins, faHandHoldingDollar, faSackDollar } from "@fortawesome/free-solid-svg-icons";

const Main = ({ toggle, Hide, setHide }) => {
  return (<>
    <main >

      <div className={`relative w-full h-auto ${toggle == true ? "bg-[#121212]" : " bg-[#f8fafc]"}`}>
        {Hide && (<div className={`absolute w-70 h-100 rounded-2xl bg-zinc-100 text-black left-225 bottom-64 border-gray-400 border shadow-md flex flex-col justify-start py-2`}>
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
        <div className='grid grid-cols-4'>
          <div className={`w-80 h-40 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"}  p-10 m-5 flex flex-col justify-center items-center`}>
            <FontAwesomeIcon icon={faLandmark} className='text-3xl' />
            <h1>Current Balance</h1>
            <p className='font-bold'>$150000</p>
          </div>
          <div className={`w-80 h-40 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"} border-0 p-2 m-5 mr-5 flex flex-col justify-center items-center`}>
            <FontAwesomeIcon icon={faSackDollar} className='text-4xl' />

            <h1>Total Income</h1>
            <p className='font-bold'>$12000</p>
          </div>
          <div className={`w-80 h-40 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"} border-0 p-2 m-5 mr-5 flex flex-col justify-center items-center`}>
            <FontAwesomeIcon icon={faCoins} className='text-4xl' />
            <h1>Total Expenses</h1>
            <p className='font-bold'>$15000</p>
          </div>
          <div className={`w-80 h-40 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"} border-0 p-2 m-5 mr-5 flex flex-col justify-center items-center`}>
            <FontAwesomeIcon icon={faHandHoldingDollar} className='text-4xl' />
            <h1>Liabilities</h1>
            <p className='font-bold'>$4000</p>

          </div>
        </div>
        <div className={`flex ${toggle == true ? "bg-[#121212]" : " bg-[#f8fafc]"}`}>
          <div className={`flex-1 w-80 h-100 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"} border-0 p-2 m-5 flex-rows`}>big
          </div>
          <div className={`grid grid-cols-1 ${toggle == true ? "bg-[#121212]" : " bg-[#f8fafc]"}`}>
            <div className={`w-70 h-45 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"} border-0 p-2 m-5`}>small</div>
            <div className={`w-70 h-45 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"} border-0 p-2 m-5`}>small</div>
          </div>
        </div>
      </div>
    </main>
  </>)
}

export default Main