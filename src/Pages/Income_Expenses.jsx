import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faCoins, faHandHoldingDollar, faSackDollar, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { FinanceContext } from '../Contexts/FinanceContext';


const Income_Expenses = () => {
    const { toggle, setToggle } = useContext(FinanceContext);
    const { Data, setData } = useContext(FinanceContext);
    const { Hide, setHide } = useContext(FinanceContext);

    const GetIncomeData = Data.filter((values) => values.Type == "Income")
        .sort(() => Math.random() - 0.5)
        .slice(0, 9)

    const GetExpenseData = Data.filter((values) => values.Type == "Expense")
        .sort(() => Math.random() - 0.5)
        .slice(0, 9)

    return (
        <>
            <div className={`min-h-screen w-full p-3 sm:p-4 transition-colors ${toggle ? "bg-[#121212]" : "bg-[#f8fafc]"}`}>

                <div className={`w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 border rounded-lg overflow-hidden shadow-md ${toggle ? "border-zinc-500" : "border-gray-300"}`}>

                    <div className={`p-3 sm:p-4 ${toggle ? "bg-zinc-600 text-white border-zinc-500" : "bg-[#e5e1e0] text-black"} lg:border-r ${toggle ? "lg:border-zinc-500" : "lg:border-gray-300"}`}>

                        <div className="w-full p-2 text-center font-bold text-xl sm:text-2xl">
                            Income
                        </div>

                        <div className="border border-black rounded overflow-hidden">
                            <div className="max-h-[350px] sm:max-h-[400px] overflow-auto">
                                <table className="w-full min-w-[500px] table-fixed border-collapse">
                                    <thead className="sticky top-0 z-10">
                                        <tr className={`${toggle ? "bg-zinc-700" : "bg-gray-300"}`}>
                                            <th className="border border-black p-2">Date</th>
                                            <th className="border border-black p-2">Category</th>
                                            <th className="border border-black p-2">Amount</th>
                                            <th className="border border-black p-2">Tax</th>
                                        </tr>
                                    </thead>

                                    {GetIncomeData.map((items) => (
                                        <tbody key={items.id}>
                                            <tr>
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

                    <div className={`p-3 sm:p-4 ${toggle ? "bg-zinc-600 text-white border-zinc-500" : "bg-[#e5e1e0] text-black"}`}>

                        <div className="w-full p-2 text-center font-bold text-xl sm:text-2xl">
                            Expense
                        </div>

                        <div className="border border-black rounded overflow-hidden">
                            <div className="max-h-[350px] sm:max-h-[400px] overflow-auto">
                                <table className="w-full min-w-[500px] table-fixed border-collapse">
                                    <thead className="sticky top-0 z-10">
                                        <tr className={`${toggle ? "bg-zinc-700" : "bg-gray-300"}`}>
                                            <th className="border border-black p-2">Date</th>
                                            <th className="border border-black p-2">Category</th>
                                            <th className="border border-black p-2">Amount</th>
                                            <th className="border border-black p-2">Tax</th>
                                        </tr>
                                    </thead>

                                    {GetExpenseData.map((items) => (
                                        <tbody key={items.id}>
                                            <tr>
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

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">

                    <div className={`w-full h-40 sm:h-48 rounded-lg shadow-md p-5 ${toggle ? "bg-[#e5e1e0] text-black" : "bg-[#e5e1e0] text-black"}`}>
                        <Line
                            data={{
                                labels: GetIncomeData.map(items => items.Category),
                                datasets: [
                                    {
                                        label: ['Incomes'],
                                        data: GetIncomeData.map(items => items.Amount),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(255, 159, 64, 0.2)',
                                            'rgba(255, 205, 86, 0.2)',
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(255, 159, 64, 1)',
                                            'rgba(255, 205, 86, 1)',
                                        ],
                                        borderWidth: 1,
                                    },
                                ],
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>

                    <div className={`w-full h-40 sm:h-48 rounded-lg shadow-md p-5 ${toggle ? "bg-[#e5e1e0] text-black" : "bg-[#e5e1e0] text-black"}`}>
                        <Line
                            data={{
                                labels: GetExpenseData.map(items => items.Category),
                                datasets: [
                                    {
                                        label: 'Expense Data',
                                        data: GetExpenseData.map(items => items.Amount),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(255, 159, 64, 0.2)',
                                            'rgba(255, 205, 86, 0.2)',
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(255, 159, 64, 1)',
                                            'rgba(255, 205, 86, 1)',
                                        ],
                                        borderWidth: 1,
                                    },
                                ],
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Income_Expenses