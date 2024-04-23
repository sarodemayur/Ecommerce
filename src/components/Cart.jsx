import React, { useContext } from "react";
import { cartContext } from "../contexts/Cartcontext";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Cart = () => {
  const auth = JSON.parse(localStorage.getItem("loggedin"));
  const { cart, clearCart, total, itemAmount } = useContext(cartContext);

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div><h1 className="text-center font-bold text-[20px] underline">Cart</h1></div>
        {cart.length === 0 ? (<div className="text-center mt-8 font-bold text-[26px]">Cart is Empty</div>) : (
        <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b mt-8">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        )}
        {cart.length > 0 && (
        <div>
          <div className="flex w-full justify-between items-center ">
            <div className="font-bold">
              <span>Total : </span> $ {parseFloat(total).toFixed(2)}
            </div>
            <div className="font-bold text-[15px] underline" >You have {itemAmount} products in cart.</div>
            <div
              onClick={clearCart}
              className="cursor-pointer py-4 bg-pink-500 text-white w-12 h-12 flex justify-center items-center text-xl"
            >
              <FiTrash2 />
            </div>
            {auth && (
            <div>
              <Link to='/checkout' className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium">Checkout</Link>
            </div>)}
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
