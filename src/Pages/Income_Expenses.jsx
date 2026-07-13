import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faCoins, faHandHoldingDollar, faSackDollar, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Income_Expenses = ({ toggle, Hide, setHide }) => {
    return (<>
        <div className={`min-h-screen w-full p-4 transition-colors ${toggle ? "bg-[#121212]" : "bg-[#f8fafc]"}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className={`w-full rounded-lg shadow-md p-6 flex flex-col justify-center items-left ${toggle ? "bg-zinc-600 text-white" : "bg-[#e5e1e0] text-black"}`}><FontAwesomeIcon icon={faLandmark} className="text-4xl mb-3" /><h1 className="text-lg">Current Balance</h1><p className="font-bold text-xl">$150000</p></div>
                <div className={`w-full rounded-lg shadow-md p-6 flex flex-col justify-center items-left ${toggle ? "bg-zinc-600 text-white" : "bg-[#e5e1e0] text-black"}`}><FontAwesomeIcon icon={faSackDollar} className="text-4xl mb-3" /><h1 className="text-lg">Total Income</h1><p className="font-bold text-xl">$12000</p></div>
                <div className={`w-full rounded-lg shadow-md p-6 flex flex-col justify-center items-left ${toggle ? "bg-zinc-600 text-white" : "bg-[#e5e1e0] text-black"}`}><FontAwesomeIcon icon={faHandHoldingDollar} className="text-4xl mb-3" /><h1 className="text-lg">Liabilities</h1><p className="font-bold text-xl">$4000</p></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
                <div className={`lg:col-span-3 min-h-[400px] rounded-lg shadow-md p-5 ${toggle ? "bg-zinc-600 text-white" : "bg-[#e5e1e0] text-black"}`}>Big</div>
                <div className={`min-h-[400px] rounded-lg shadow-md p-5 ${toggle ? "bg-zinc-600 text-white" : "bg-[#e5e1e0] text-black"}`}>Small</div>
            </div>

            <div className="mt-5"><div className={`min-h-[200px] rounded-lg shadow-md p-5 ${toggle ? "bg-zinc-600 text-white" : "bg-[#e5e1e0] text-black"}`}>Big</div></div>
        </div>
    </>)
}

export default Income_Expenses