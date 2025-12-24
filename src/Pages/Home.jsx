import { useState } from "react";
import { Categories } from "../category";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
import { Food_items } from "../food";
import { useContext } from "react";
import { dataContext } from "../ContextApi/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)

  function filter(category) {
    if (category === "All") {
      setCate(Food_items);
    } else {
      let newList = Food_items.filter((item) => (
        item.food_category === category
      ));

      setCate(newList);
    }
  }

  let items = useSelector(state => state.cart);

  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
  let deliveryFee = 20
  let taxes = subtotal * 0.5 / 100
  let total = Math.floor(subtotal + deliveryFee + taxes)
  return (
    <>
      <div className="bg-slate-200 w-full min-h-screen">
        <Nav />
        {/* main card div */}
        {!input > 0 ? <div className="flex justify-center items-center gap-5 flex-wrap w-full ">
          {Categories.map((item, index) => {
            return <div key={index} className="w-[140px] h-[150px] bg-white flex flex-col items-start justify-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-xl shadow-xl active:bg-green-200 hover:bg-green-200 cursor-pointer transition-all duration-200" onClick={() => filter(item.name)}>
              {item.img}
              {item.name}

            </div>
          })}
        </div>
          : null}

        {/* items card div */}
        <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8 ">
          {cate.length > 1 ? cate.map((item, index) => (
            <Cards key={index} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
          )) : <div className="text-center text-2xl text-green-500 font-bold pt-10">No Dish Found</div>}

        </div>

        {/* side bar card div */}
        <div className={` w-full h-full md:w-[40vw] fixed top-0 right-0 bg-white overflow-auto shadow-lg p-7 transition-all duration-500 flex
          flex-col items-center ${showCart ? "translate-x-0" : "translate-x-full"} `}>
          <header className="w-full flex justify-between items-center">
            <span className="text-green-400 text-[20px] font-semibold">Order items</span>
            <RxCross2 className="text-green-400 text-[20px] font-semibold size-8 cursor-pointer active:text-gray-600 hover:text-gray-600" onClick={() => setShowCart(false)} />
          </header>

          {items.length > 0 ? <>
            {/* card2  */}
            <div className="w-full mt-9 flex flex-col gap-8 ">
              {
                items.map((item, index) => (
                  <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} key={index} />
                ))
              }
            </div>

            {/* prices details div */}
            <div className="w-full  border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8">
              {/* subtotal div */}
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">Subtotal </span>
                <span className="text-lg text-green-400 font-semibold">Rs {subtotal}/-</span>
              </div>

              {/* delivery div */}
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">Delivery Fee </span>
                <span className="text-lg text-green-400 font-semibold">Rs {deliveryFee}/-</span>
              </div>

              {/* taxes div */}
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">Taxes </span>
                <span className="text-lg text-green-400 font-semibold">Rs {taxes}/-</span>
              </div>

            </div>

            {/* total price div */}
            <div className="w-full flex justify-between items-center p-9">
              <span className="text-2xl text-gray-600 font-semibold">total </span>
              <span className="text-2xl text-green-400 font-semibold">Rs {total}/-</span>
            </div>

            <button className='w-[80%] font-semibold p-3 bg-green-500 rounded-lg text-white duration-1000 md:duration-75 active:bg-green-300 hover:bg-green-300 transition-all' onClick={() => toast.success("Order Place..")}>Place Order</button>
          </> :
            <div className="text-center text-2xl text-green-500 font-semibold pt-8">
              Empty Card
            </div>

          }

        </div>
      </div>
    </>
  )
}