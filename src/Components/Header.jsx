import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser, faPlus, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { FinanceContext } from "../Contexts/FinanceContext";

const Header = () => {
  const username = localStorage.getItem("username");
  const location = useLocation();

  const { toggle, setToggle, Hide, setHide, open, setOpen } = useContext(FinanceContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Income & Expenses", path: "/finance-overview" },
    { name: "Account Overview", path: "/overview" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className={`w-full ${toggle ? "bg-[#0f172a] text-white" : "bg-purple-600 text-black"} shadow-md`}>
      <div className="max-w-7xl mx-auto px-2">

        <div className="flex items-center justify-between min-h-16">

          {/* Left Side */}
          <div className="flex items-center">

            <button className="md:hidden p-3 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>


            <div className="hidden md:flex">

              {links.map((item) => (
                <Link key={item.path} to={item.path}
                  className={`p-5 font-bold text-sm ${toggle
                    ? location.pathname === item.path
                      ? "bg-[#121212] text-white"
                      : "hover:bg-[#121212] text-white"
                    : location.pathname === item.path
                      ? "bg-zinc-100 text-zinc-700"
                      : "hover:bg-zinc-50 text-zinc-900"
                    }`}>
                  {item.name}
                </Link>
              ))}

            </div>

          </div>


          {/* Right Side Icons */}
          <div className="flex items-center gap-2">

            {location.pathname === "/finance-overview" && (

              <div className="relative">

                <button className="p-2" onClick={() => setOpen(!open)}>
                  <FontAwesomeIcon icon={faPlus} className={`${open ? "rotate-45 text-emerald-400" : "text-white"} text-3xl`} />
                </button>


                {open && (
                  <div className="absolute right-0 top-full mt-3 w-[90vw] sm:w-80 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl p-5 z-50">

                    <form className="space-y-4">

                      <input type="date" className="w-full px-3 py-2 rounded bg-zinc-800 text-white" />

                      <div className="flex gap-5 text-white">
                        <label>
                          <input type="radio" name="type" /> Income
                        </label>

                        <label>
                          <input type="radio" name="type" /> Expense
                        </label>
                      </div>

                      <select className="w-full px-3 py-2 rounded bg-zinc-800 text-white">
                        <option>Select Category</option>
                        <option>Food</option>
                        <option>Travel</option>
                        <option>Shopping</option>
                      </select>


                      <input type="number" placeholder="₹ Enter Amount" className="w-full px-3 py-2 rounded bg-zinc-800 text-white" />

                      <button className="w-full py-2 bg-emerald-500 rounded-lg">
                        Save Transaction
                      </button>

                    </form>

                  </div>
                )}

              </div>

            )}



            {/* Notification */}
            <div className="relative p-2">

              <FontAwesomeIcon icon={faBell} className="text-3xl cursor-pointer" onClick={() => setHide(!Hide)} />


              {Hide && (
                <div className="absolute right-0 mt-4 w-72 bg-zinc-100 text-black rounded-xl shadow-md p-3 z-50">

                  <p className="text-xl font-bold text-center">
                    Notification
                  </p>

                  <hr />

                  <p className="p-2 bg-white rounded mt-2">
                    Your OTP is 482913
                  </p>
                  <p className="p-2 bg-white rounded mt-2">
                    New update available
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1">
              <p className="hidden sm:block font-bold text-sm">
                {username}
              </p>
              <Link to="/register">
                <FontAwesomeIcon icon={faCircleUser} className="text-3xl cursor-pointer text-white" />
              </Link>
            </div>
            <button className={`relative w-10 h-5 rounded-full transition justify-center pl-1 ${toggle ? "bg-green-500" : "bg-black"}`} onClick={() => setToggle(!toggle)}>
              <div className={`absolute w-4 h-4 bg-white rounded-full top-0.5 transition-transform ${toggle ? "translate-x-4" : "translate-x-0"}`} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col border-t">
            {links.map((item) => (
              <Link key={item.path} to={item.path} className="p-3 font-bold">
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;