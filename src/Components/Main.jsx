import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { faLandmark, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FinanceContext } from '../Contexts/FinanceContext';

const Main = () => {
  const { toggle, Data } = useContext(FinanceContext);

  const IncomeTotal = Data.filter(value => value.Type === "Income")
    .sort(() => Math.random() - 0.5)
    .slice(0, 7)
    .reduce((Totalincome, item) => Totalincome + item.Amount, 0);

  const Income_Total = Data.filter(value => value.Type === "Income")
    .sort(() => Math.random() - 0.5)
    .slice(0, 30)
    .reduce((Totalincome, item) => Totalincome + item.Amount, 0);

  const Income_Total1 = Data.filter(value => value.Type === "Income")
    .sort(() => Math.random() - 0.5)
    .slice(0, 100)
    .reduce((Totalincome, item) => Totalincome + item.Amount, 0);

  const ExpenseTotal = Data.filter(value => value.Type === "Expense")
    .sort(() => Math.random() - 0.5)
    .slice(0, 7)
    .reduce((TotalExpense, item) => TotalExpense + item.Amount, 0);

  const Expense_Total = Data.filter(value => value.Type === "Expense")
    .sort(() => Math.random() - 0.5)
    .slice(0, 30)
    .reduce((TotalExpense, item) => TotalExpense + item.Amount, 0);

  const Expense_Total1 = Data.filter(value => value.Type === "Expense")
    .sort(() => Math.random() - 0.5)
    .slice(0, 100)
    .reduce((TotalExpense, item) => TotalExpense + item.Amount, 0);

  const ExpenditureTotal = Data.filter(value => value.Expenditure_amount)
    .sort(() => Math.random() - 0.5)
    .slice(0, 7)
    .reduce((TotalExpenditure, item) => TotalExpenditure + item.Expenditure_amount, 0);

  const Expenditure_Total = Data.filter(value => value.Expenditure_amount)
    .sort(() => Math.random() - 0.5)
    .slice(0, 30)
    .reduce((TotalExpenditure, item) => TotalExpenditure + item.Expenditure_amount, 0);

  const Expenditure_Total1 = Data.filter(value => value.Expenditure_amount)
    .sort(() => Math.random() - 0.5)
    .slice(0, 150)
    .reduce((TotalExpenditure, item) => TotalExpenditure + item.Expenditure_amount, 0);

  const CurrentBalance = parseInt(IncomeTotal + ExpenseTotal) || 0;
  const CurrentIncome = parseInt(IncomeTotal) || 0;
  const CurrentExpense = parseInt(ExpenseTotal) || 0;
  const TotalTax = (CurrentIncome * 5) / 100;

  const bgTheme = toggle ? "bg-[#1e1e24]" : "bg-[#f8fafc]";
  
  // Zinc 200 background and updated matching border added to the light theme configuration below
  const cardTheme = toggle
    ? "bg-[#2b2b36] border-[#3f3f50] text-slate-100"
    : "bg-zinc-200 border-zinc-300 text-slate-900 shadow-[0_2px_12px_-3px_rgba(148,163,184,0.12)]";

  const labelColor = toggle ? "#94a3b8" : "#64748b";

  return (
    <main className={`w-full min-h-screen p-4 md:p-8 ${bgTheme} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">

          <div className={`w-full rounded-2xl border p-5 flex flex-col justify-between h-56 transition-all duration-300 ${cardTheme}`}>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <FontAwesomeIcon icon={faLandmark} className={toggle ? "text-indigo-400" : "text-indigo-500"} />
                <h1 className={`font-bold text-xs uppercase tracking-wider ${labelColor}`}>Current Balance</h1>
              </div>
              <p className="font-black text-2xl tracking-tight">${CurrentBalance.toLocaleString()}</p>
            </div>
            <div className="relative h-28 w-full">
              <Line
                data={{
                  labels: ['Balance', 'Income', 'Expense'],
                  datasets: [
                    {
                      label: 'Current Balance',
                      data: [CurrentBalance, CurrentIncome, CurrentExpense],
                      backgroundColor: ['rgba(99, 102, 241, 0.15)', 'rgba(34, 197, 94, 0.15)', 'rgba(239, 68, 68, 0.15)'],
                      borderColor: ['#6366f1', '#22c55e', '#ef4444'],
                      borderWidth: 2,
                      tension: 0.3,
                      pointRadius: 3,
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }}
              />
            </div>
          </div>

          <div className={`w-full rounded-2xl border p-5 flex flex-col justify-between h-56 transition-all duration-300 ${cardTheme}`}>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <FontAwesomeIcon icon={faLandmark} className={toggle ? "text-emerald-400" : "text-emerald-500"} />
                <h1 className={`font-bold text-xs uppercase tracking-wider ${labelColor}`}>Current Income</h1>
              </div>
              <p className="font-black text-2xl tracking-tight text-emerald-500">${CurrentIncome.toLocaleString()}</p>
            </div>
            <div className="relative h-28 w-full">
              <Line
                data={{
                  labels: ['1W', '1M', '1Y'],
                  datasets: [
                    {
                      label: 'Incomes',
                      data: [IncomeTotal, Income_Total, Income_Total1],
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      borderColor: '#22c55e',
                      borderWidth: 2,
                      fill: true,
                      tension: 0.4,
                      pointRadius: 0,
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }}
              />
            </div>
          </div>

          <div className={`w-full rounded-2xl border p-5 flex flex-col justify-between h-56 transition-all duration-300 ${cardTheme}`}>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <FontAwesomeIcon icon={faLandmark} className={toggle ? "text-rose-400" : "text-rose-500"} />
                <h1 className={`font-bold text-xs uppercase tracking-wider ${labelColor}`}>Current Expense</h1>
              </div>
              <p className="font-black text-2xl tracking-tight text-rose-500">${CurrentExpense.toLocaleString()}</p>
            </div>
            <div className="relative h-28 w-full">
              <Line
                data={{
                  labels: ['1W', '1M', '1Y'],
                  datasets: [
                    {
                      label: 'Expenses',
                      data: [ExpenseTotal, Expense_Total, Expense_Total1],
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      borderColor: '#ef4444',
                      borderWidth: 2,
                      fill: true,
                      tension: 0.4,
                      pointRadius: 0,
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }}
              />
            </div>
          </div>

          <div className={`w-full rounded-2xl border p-5 flex flex-col justify-center items-center h-56 text-center transition-all duration-300 ${cardTheme}`}>
            <div className={`p-4 rounded-full ${toggle ? 'bg-amber-500/10' : 'bg-amber-50'} mb-3`}>
              <FontAwesomeIcon icon={faHandHoldingDollar} className="text-3xl text-amber-500" />
            </div>
            <h1 className={`font-bold text-xs uppercase tracking-wider ${labelColor}`}>Income Tax (5%)</h1>
            <p className="font-black text-2xl tracking-tight mt-1 text-amber-500">${TotalTax.toLocaleString()}</p>
          </div>

        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          <div className={`w-full lg:w-2/3 h-[488px] rounded-2xl border p-5 flex flex-col transition-all duration-300 relative ${cardTheme}`}>
            <h2 className={`font-bold text-xs uppercase tracking-wider mb-4 ${labelColor}`}>Current Overview</h2>
            <div className="flex-1 min-h-[300px] relative">
              <Bar
                data={{
                  labels: ['Balance', 'Income', 'Expense'],
                  datasets: [
                    {
                      label: 'Financial Assets',
                      data: [CurrentBalance, CurrentIncome, CurrentExpense],
                      backgroundColor: ['#6366f1', '#22c55e', '#ef4444'],
                      borderRadius: 4,
                      barThickness: 32,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } }
                }}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-6 justify-between">

            <div className={`w-full rounded-2xl border p-5 flex flex-col justify-between h-56 transition-all duration-300 ${cardTheme}`}>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <FontAwesomeIcon icon={faLandmark} className={toggle ? "text-violet-400" : "text-violet-500"} />
                  <h1 className={`font-bold text-xs uppercase tracking-wider ${labelColor}`}>Current Expenditure</h1>
                </div>
                <p className="font-black text-2xl tracking-tight">${ExpenditureTotal.toLocaleString()}</p>
              </div>
              <div className="relative h-28 w-full">
                <Line
                  data={{
                    labels: ['1W', '1M', '1Y'],
                    datasets: [
                      {
                        label: 'Expenditure Trend',
                        data: [ExpenditureTotal, Expenditure_Total, Expenditure_Total1],
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderColor: '#8b5cf6',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                      },
                    ],
                  }}
                  options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }}
                />
              </div>
            </div>

            <div className={`w-full rounded-2xl border p-6 flex items-center justify-center h-56 transition-all duration-300 relative ${cardTheme}`}>
              <div className="w-full h-full relative flex items-center justify-center">
                <Doughnut
                  data={{
                    labels: ['Balance', 'Income', 'Expense'],
                    datasets: [
                      {
                        data: [CurrentBalance, CurrentIncome, CurrentExpense],
                        backgroundColor: ['#6366f1', '#22c55e', '#ef4444'],
                        borderWidth: toggle ? 2 : 0,
                        borderColor: toggle ? '#2b2b36' : '#fff',
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'right', labels: { boxWidth: 12, font: { size: 11 } } } }
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;