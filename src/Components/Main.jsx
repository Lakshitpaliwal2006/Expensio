import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faCoins, faHandHoldingDollar, faSackDollar } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (<>
    <main>
      <div className='w-full h-auto bg-zinc-200'>
        <div className=' grid grid-cols-4'>
          <div className='w-80 h-40 shadow-2xs bg-white  p-10 m-5 flex flex-col justify-center items-center'>

            <FontAwesomeIcon icon={faLandmark} className='text-3xl' />
            <h1>Current Balance</h1>
            <p className='font-bold'>$150000</p>
          </div>
          <div className='w-80 h-40 shadow-2xs bg-white border-0 p-2 m-5 mr-5 flex flex-col justify-center items-center'>
            <FontAwesomeIcon icon={faSackDollar} className='text-4xl' />

            <h1>Total Income</h1>
            <p className='font-bold'>$12000</p>
          </div>
          <div className='w-80 h-40 shadow-2xs bg-white border-0 p-2 m-5 mr-5 flex flex-col justify-center items-center'>
            <FontAwesomeIcon icon={faCoins} className='text-4xl' />
            <h1>Total Expenses</h1>
            <p className='font-bold'>$15000</p>
          </div>
          <div className='w-80 h-40 shadow-2xs bg-white border-0 p-2 m-5 mr-5 flex flex-col justify-center items-center'>
            <FontAwesomeIcon icon={faHandHoldingDollar} className='text-4xl' />
            <h1>Liabilities</h1>
            <p className='font-bold'>$4000</p>

          </div>
        </div>
        <div className='flex bg-zinc-200'>
          <div className='flex-1 w-80 h-100 shadow-2xs bg-white border-0 p-2 m-5 flex-rows'>big
          </div>
          <div className='grid grid-cols-1 bg-zinc-200'>
            <div className='w-70 h-45 shadow-2xs bg-white border-0 p-2 m-5'>small</div>
            <div className='w-70 h-45 shadow-2xs bg-white border-0 p-2 m-5'>small</div>
          </div>
        </div>
      </div>
    </main>
  </>)
}

export default Main