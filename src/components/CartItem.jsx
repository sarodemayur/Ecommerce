/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { cartContext } from "../contexts/Cartcontext";

const CartItem = ({ item }) => {
  const auth = JSON.parse(localStorage.getItem("loggedin"))
  const{removeFromCart, increaseAmount, decreaseAmount}=useContext(cartContext)
  const { id, title, image, price, amount } = item;

  return (
    <> 
      <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
        <div className="w-full min-h-[150px] flex items-centre gap-x-4">
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px]" src={image} alt="" />
          </Link>
          <div className="w-full flex flex-col">
            <div className="flex justify-between mb-2">
              <Link
                to={`/product/${id}`}
                className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
              >
                {title}
              </Link>
              <div className="">
                <div className="text-xl cursor-pointer" onClick={() => removeFromCart(id)}>
                  <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                </div>
              </div>
            </div>
            <div className=" flex gap-x-2 h-[36px] text-sm">
              <div className="flex flex-1 max-w-[100px]  items-centre h-full border text-primary font-medium" >
                <div onClick={() => decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer"><IoMdRemove /></div>
                <div className="h-full flex justify-center items-center px-2"> {amount}</div>
                <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer"><IoMdAdd /></div>
              </div>
              <div className="flex-1 flex items-center justify-around font-bold">Price : ${price}</div>
              <div className="flex-1 flex text-primary justify-end items-center font-medium ">{` Total Price: $  ${parseFloat(price * amount).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
