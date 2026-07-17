import React from 'react'
import { createContext, useContext, useState } from 'react'
export const FinanceContext = createContext();
export const FinanceProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const [Hide, setHide] = useState(false)
    const [Userhide, setUserhide] = useState(false)
    const [isActive, setisActive] = useState(false)
    const [Username, setUsername] = useState("");
    const [Data, setData] = useState([])
    const [open, setOpen] = useState(false);
    const [Plus, setPlus] = useState(false)
    return (
        <FinanceContext.Provider value={{ toggle, setToggle, Hide, setHide, Userhide, setUserhide, isActive, setisActive, Username, setUsername, Data, setData, open, setOpen, Plus, setPlus }}>
            {children}
        </FinanceContext.Provider>
    )
}
