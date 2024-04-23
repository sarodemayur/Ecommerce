import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { cartContext } from '../contexts/Cartcontext';

const ProductDetails = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("loggedin"));
  const {id} = useParams();
  const {products} = useContext(ProductContext)
  const {addToCart} =  useContext(cartContext)

  const product = products.find((item) => {
    return item.id === parseInt(id);
  })
  
  if(!product){
    return(
      <section className='h-screen flex justify-center items-center'>Loading...</section>
    )
  };

  const handleNavigate = () => {
    if(auth){
      navigate('/checkout');
    }
  }
  
  const {title, price, description, image} = product;

  return (
   <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center border border-[#34222253]'>
      <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
        <img className='max-w-[200px] lg:max-w-sm ' src={image} alt=''/>
        </div>
      <div className='flex-1 justify-center lg:text-left'>
        <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
        <div className='text-xl text-red-500 font-medium mb-6'> Price : $ {price}</div>
        <p className='mb-8'>{description}</p>
        <button onClick={() => addToCart(product, product.id)} className='h-10 px-6 font-semibold rounded-md bg-black text-white'>Add to Cart</button>
        <div className='mt-4'>
        <button onClick={handleNavigate} className="h-10 px-6 font-semibold rounded-md bg-black text-white">Buy Now</button>
        </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProductDetails;
