import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { faLandmark, faCoins, faHandHoldingDollar, faSackDollar, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Main = ({ toggle }) => {
  const [Data, setData] = useState([])
  const financeData = async () => {
    try {
      const response = await axios.get('http://localhost:4001/finance')
      setData(response.data)

    } catch (error) {
      console.log('Some Fetching error', error)
    }
  }
  useEffect(() => {
    financeData();
  }, []);

  const IncomeTotal = Data.filter(value => value.Type == "Income")
    .sort(() => Math.random() - 0.5)
    .slice(0, 30)
    .reduce((Totalincome, item) => {
      return Totalincome + item.Amount
    }, 0)
  const ExpenseTotal = Data.filter(value => value.Type == "Expense")
    .sort(() => Math.random() - 0.5)
    .slice(0, 30)
    .reduce((Totalincome, item) => {
      return Totalincome + item.Amount
    }, 0)
  const CurrentBalance = parseInt(IncomeTotal + ExpenseTotal);
  const CurrentIncome = parseInt(IncomeTotal)
  const CurrentExpense = parseInt(ExpenseTotal)
  const TotalTax = CurrentIncome * 5 / 100;

  return (<>
    <main className='static'>
      <div className={`static w-full h-auto ${toggle == true ? "bg-[#121212]" : " bg-[#f8fafc]"}`}>

        <div className='grid grid-cols-4'>
          <div className={`w-80 h-40 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"}  p-2 m-5 flex flex-col justify-end items-left`}>
            <FontAwesomeIcon icon={faLandmark} className='text-3xl' />
            <h1>Current Balance</h1>
            <p className='font-bold'>${CurrentBalance}</p>
          </div>
          <div className={`w-80 h-40 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"} border-0 p-2 m-5 mr-5 flex flex-col justify-end items-left`}>
            <FontAwesomeIcon icon={faSackDollar} className='text-4xl' />

            <h1>Total Income</h1>
            <p className='font-bold'>${CurrentIncome}</p>
          </div>
          <div className={`w-80 h-40 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"} border-0 p-2 m-5 mr-5 flex flex-col justify-end items-left`}>
            <FontAwesomeIcon icon={faCoins} className='text-4xl' />
            <h1>Total Expenses</h1>
            <p className='font-bold'>${CurrentExpense}</p>
          </div>
          <div className={`w-80 h-40 shadow-2xs ${toggle == true ? "bg-zinc-600 text-white" : " bg-[#e5e1e0]"} border-0 p-2 m-5 mr-5 flex flex-col justify-end items-left`}>
            <FontAwesomeIcon icon={faHandHoldingDollar} className='text-4xl' />
            <h1>Income Tax</h1>
            <p className='font-bold'>${TotalTax}</p>

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