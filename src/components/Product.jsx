import React, { useContext } from 'react';
import { BsPlus } from "react-icons/bs";
//import { BsEyeFill } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { cartContext } from '../contexts/Cartcontext';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const navigate = useNavigate()
 const auth = JSON.parse(localStorage.getItem("loggedin"));
   const{addToCart} = useContext(cartContext)

  const {id, image, category, title, price} = product;

  const handleNavigate = (product) => {
    if(auth){
    addToCart(product,id);
    navigate('/checkout')
    }else{
      alert("please login")
    }
  }

  const handleAddToCart = (product) => {
     if(auth){
      addToCart(product,id);
      alert("Product added successfully to the cart");
     }else{
      alert("please login")
    }
  }

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img 
            className='max-h-[160px] group-hover:scale-110 transition duration-300' 
            src={image}
            alt=''
            />  
          </div>
        </div>
        <div className='absolute top-0 right-0 bg-blue-500 p-2'>
          <button onClick={() => handleAddToCart(product)}><div className='flex justify-center items-center text-white w-10 h-10 '>
          <BsPlus className='text-3xl' />
          </div>
          </button>
          {/* <Link to={`/product/${id}`} className='w-10 h-10 bg-white flex justify-center items-center'>
          <BsEyeFill />
          </Link> */}
        </div>
      </div>
      <div>{category}
       <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
       </Link>
       <div className='font-semibold'>Price: ${price}</div>
       <button onClick={() => handleNavigate(product)} className='h-10 px-6 font-semibold rounded-md bg-black text-white'>Buy Now</button>
      </div>
    </div>
  )
};

export default Product;
