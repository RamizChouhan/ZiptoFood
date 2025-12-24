import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext } from 'react';
import { dataContext } from '../ContextApi/UserContext';
import { useEffect } from 'react';
import { Food_items } from '../food';
import { useSelector } from 'react-redux';


function Nav() {
  let { input, setinput, cate, setCate, showCart, setShowCart } = useContext(dataContext);

  useEffect(() => {
    if (!input) {
      setCate(Food_items);
      return;
    }

    const newlist = Food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );

    setCate(newlist);
  }, [input]);

  let items = useSelector(state => state.cart);


  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-10' >

      <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl active:bg-green-400 hover:bg-green-400 group'>
        <MdFastfood className='w-[30px] h-[30px] text-green-500 group-hover:text-white group-active:text-white' />
      </div>


      <form className='w-[55%] h-16 bg-white flex items-center px-3 gap-4 rounded-md shadow-md md:w-[70%] md:gap-6 md:px-5 focus:border-2 focus:border-green-400 hover:border-2 hover:border-green-400' onSubmit={(e) => e.preventDefault()}>
        <IoSearch className='text-green-500 w-[25px] h-[25px] ' />

        <input type="text" placeholder='Search Items...' className='w-[100%] outline-none text-[16px] md:text-[23px]' onChange={(e) => setinput(e.target.value)} value={input} />
      </form>


      <div className='w-[75px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl relative cursor-pointer active:bg-green-400 hover:bg-green-400 group' onClick={() => { setShowCart(true); console.log("clicked") }}>
        <span className='absolute top-0 right-1 text-[15px] text-green-500 font-semibold group-active:text-white  group-hover:text-white'>{items.length}</span>
        <LuShoppingBag className='w-[30px] h-[30px] text-green-500 group-active:text-white  group-hover:text-white' />
      </div>
    </div>
  )
}

export default Nav