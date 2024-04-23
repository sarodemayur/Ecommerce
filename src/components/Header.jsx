import React, { useContext, useState, useEffect } from "react";
//import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { cartContext } from "../contexts/Cartcontext";
import { Link } from "react-router-dom";
//import Logo from "../img/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const auth = JSON.parse(localStorage.getItem("loggedin"));
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { itemAmount, clearCart} = useContext(cartContext);
  // const { isOpen, setIsOpen } = useContext(SidebarContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
    clearCart();
  };

  const handleNavigate = () => {
    navigate("/Cart");
  };

  return (
    <>
      <header
        className={`${
          isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
        } fixed w-full z-10 transition-all`}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          <Link to={"/"}>
            <div>
              <img className="w-[100px]" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="" />
            </div>
          </Link>
          <Link to={"/productspage"}>
            <div>
              <button className="underline"> Products</button>
            </div>
          </Link>
          <Link to={"/about"}>
            <div>
              <button className="underline">About Us</button>
            </div>
          </Link>
          <Link to={"/contact"}>
            <div>
              <button className="underline">Contact</button>
            </div>
          </Link>
          
          {!auth && (
            <>
          <Link
            to={"/signup"}
            className="text-gray-800 hover:bg-red-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Sign-Up
          </Link>
          <Link
            to={"/login"}
            className="text-gray-800 hover:bg-red-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Login
          </Link>
          </>
          )}

          {auth && (
          <button
            onClick={handleLogout}
            className="text-gray-800 hover:bg-red-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Logout
          </button>
          )}
          <div
            // onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex-relative "
          >
            <BsBag onClick={handleNavigate} className="text-2xl -right-0" />
            <div className="bg-red-500 absolute -right-3-bottom-3 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
