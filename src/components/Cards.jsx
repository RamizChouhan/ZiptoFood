import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from '../Redux/Cartslice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Cards({ name, image, id, price, type }) {
  let dispatch = useDispatch()
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-xl flex flex-col gap-3 shadow-lg hover:border-2 border-green-400 active:border-2 '>

      <div className='w-full h-[60%] overflow-hidden rounded-xl'>
        {/* image */}
        <img src={image} alt="" className='object-cover' />
      </div>

      <div className='text-2xl font-semibold'>
        {/* name */}
        {name}
      </div>

      <div className='w-full flex items-center justify-between '>
        {/* prince */}
        <div className='text-lg font-bold text-green-500'>Rs {price}/-</div>
        <div className='flex justify-center items-center gap-3 text-green-500 text-lg font-semibold'>
          {type == "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button className='w-full font-semibold p-3 bg-green-500 rounded-lg text-white active:bg-green-300 hover:bg-green-300 transition-all' onClick={() => { dispatch(AddItem({ id: id, name: name, price: price, image: image, qty: 1 })); toast.success("Item Added") }}>Add to dish</button>
    </div>
  )
}

export default Cards