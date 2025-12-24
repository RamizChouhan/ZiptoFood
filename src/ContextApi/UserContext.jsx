import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { Food_items } from '../food';

export const dataContext = createContext();
function UserContext({ children }) {
    let [cate, setCate] = useState(Food_items);
    let [input, setinput] = useState("")
    let [showCart, setShowCart] = useState(false)
    let data = { input, setinput, cate, setCate, showCart, setShowCart }
    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext