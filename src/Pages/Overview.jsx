import React from "react";
import { FinanceContext } from "../Contexts/FinanceContext";
import { useContext } from "react";
const Overview = () => {
  const {toggle, setToggle} = useContext(FinanceContext);
  return (
    <div className={`min-h-screen ${toggle == true ? "bg-slate-500" : "bg-gray-100"} flex justify-center py-10`}>
      <div className={`w-198 min-h-280 ${toggle == true ? "bg-zinc-600 text-white" : "bg-white"} shadow-lg px-24 py-20`}>
        <h1 className={` ${toggle == true ? "text-white" : "text-[#1B5E8A]"} text-3xl font-bold uppercase tracking-[4px] mb-10 `}>
          EXPENSIO
        </h1>
        <p className={` ${toggle == true ? "text-white" : "text-gray-700 "} text-[15px] leading-8 font-serif mb-12`}>
          An Expense Tracking Website is a simple web application that helps users record and manage their daily income and expenses. Instead of writing expenses in a notebook, users can store all their financial information online in one place. This makes it easier to keep track of spending and save money.

          The main goal of this project is to help users understand where their money is being spent. Users can add new expenses, edit incorrect records, delete old entries, and view all transactions in an organized way. The website also shows the total income, total expenses, and remaining balance, making it easy to understand personal finances.
        </p>

        <div className="mb-10">
          <h2 className={` ${toggle == true ? "text-white" : "text-[#1B5E8A]"}  text-2xl font-bold uppercase tracking-widest mb-5`}>
            Project Objectives
          </h2>

          <p className={` ${toggle == true ? "text-white" : "text-gray-700 "} text-[15px] leading-8 font-serif mb-6`}>
            The main objective of the Expense Tracking Website is to help users manage their daily income and expenses in a simple and organized way. It allows users to record every transaction so they can easily track where their money is being spent. The website helps users understand their financial habits and manage their budget more effectively.
          </p>


          <p className={`${toggle == true ? "text-white" : "text-gray-700"} text-[15px] leading-8 font-serif mb-6`}>
            This project is developed using React and Tailwind CSS to create a fast, responsive, and user-friendly interface. It provides features such as adding, editing, deleting, and viewing expense records. The objective is also to give beginners a practical understanding of building modern web applications while creating a useful tool for personal expense management.
          </p>

          <ul className={`list-disc pl-6 space-y-3 ${toggle == true ? "text-white" : "text-gray-700"} text-[15px] leading-8 font-serif`}>
            <li>
              To keep all financial records organized in one place.
            </li>
            <li>
              To provide an easy and user-friendly interface for managing personal financial records without confusion or difficulty.
            </li>
            <li>
              To display the total income, total expenses, and remaining balance for better financial planning and decision-making.
            </li>
          </ul>
        </div>
        <div className="mt-16 border-t border-gray-300"></div>
      </div>
    </div>
  );
};

export default Overview;