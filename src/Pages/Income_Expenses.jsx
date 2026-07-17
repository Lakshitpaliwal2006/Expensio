import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faCoins, faHandHoldingDollar, faSackDollar, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Income_Expenses = ({ toggle, Hide, setHide, Data }) => {

    const GetIncomeData = Data.filter((values) => values.Type == "Income")
        .sort(() => Math.random() - 0.5)
        .slice(0, 9)

    const GetExpenseData = Data.filter((values) => values.Type == "Expense")
        .sort(() => Math.random() - 0.5)
        .slice(0, 9)


    return (<>
        <div className={`min-h-fit w-full p-4 transition-colors ${toggle ? "bg-[#121212]" : "bg-[#f8fafc]"}`}>
            <div className={`w-full h-[70vh] mx-auto gap-1 grid grid-cols-2 border rounded-lg overflow-hidden shadow-md ${toggle ? "border-zinc-500" : "border-gray-300"}`}>

                <div className={`p-4 border-r ${toggle ? "bg-zinc-600 text-white border-zinc-500" : "bg-[#e5e1e0] text-black border-gray-300"}`}>

                    <div className="w-full h-fit p-2 rounded text-center font-bold text-2xl">Income</div>

                    <div className="border border-black rounded overflow-hidden">

                        <div className="max-h-[360px] overflow-y-auto">
                            <table className="w-full table-fixed border-collapse">
                                <thead className="sticky top-0 z-10">
                                    <tr className={`${toggle ? "bg-zinc-700" : "bg-gray-300"}`}>
                                        <th className="border border-black p2 w-1/3">Date</th>
                                        <th className="border border-black p-2 w-1/3">Category</th>
                                        <th className="border border-black p-2 w-1/3">Amount</th>
                                        <th className="border border-black p-2 w-1/3">Tax</th>
                                    </tr>
                                </thead>
                                {GetIncomeData.map((items) => (
                                    <tbody>
                                        <tr key={items.id}>
                                            <td className="border border-black p-2">{new Date(items.Date).toLocaleDateString("en-CA")}</td>
                                            <td className="border border-black p-2">{items.Category}</td>
                                            <td className="border border-black p-2">${items.Amount}</td>
                                            <td className="border border-black p-2">${((items.Amount * 5) / 100).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>

                    </div>

                </div>
                {/* This is Expense Side*/}
                <div className={`p-4 border-r ${toggle ? "bg-zinc-600 text-white border-zinc-500" : "bg-[#e5e1e0] text-black border-gray-300"}`}>

                    <div className="w-full h-fit p-2 rounded text-center font-bold text-2xl">
                        Expense
                    </div>

                    <div className="border border-black rounded overflow-hidden">
                        <div className="max-h-[360px] overflow-y-auto">
                            <table className="w-full table-fixed border-collapse">
                                <thead className="top-0 z-10">
                                    <tr className={`${toggle ? "bg-zinc-700" : "bg-gray-300"}`}>
                                        <th className="border border-black p-2 w-1/3">Date</th>
                                        <th className="border border-black p-2 w-1/3">Category</th>
                                        <th className="border border-black p-2 w-1/3">Amount</th>
                                        <th className="border border-black p-2 w-1/3">Tax</th>
                                    </tr>
                                </thead>

                                {GetExpenseData.map((items) => (
                                    <tbody>
                                        <tr key={items.id}>
                                            <td className="border border-black p-2">{new Date(items.Date).toLocaleDateString('en-CA')}</td>
                                            <td className="border border-black p-2">{items.Category}</td>
                                            <td className="border border-black p-2">${items.Amount}</td>
                                            <td className="border border-black p-2">${((items.Amount * 5) / 100).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>

                    </div>

                </div>
            </div>

            <div className="grid grid-cols-2 gap-1 mt-3">
                <div className={`w-full h-[20vh] rounded-lg shadow-md p-5 ${toggle ? "bg-zinc-600 text-white" : "bg-[#e5e1e0] text-black"}`}>Big</div>
                <div className={`w-full h-[20vh] rounded-lg shadow-md p-5 ${toggle ? "bg-zinc-600 text-white" : "bg-[#e5e1e0] text-black"}`}>Small</div>
            </div>

        </div>
    </>)
}

export default Income_Expenses