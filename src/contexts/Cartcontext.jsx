import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const cartContext = createContext()
//const auth  = JSON.parse(localStorage.getItem("loggedin"));
const CartProvider = ({children}) => {
  const [cart,setCart] = useState([])
  const [itemAmount, setitemAmount] = useState(0);
  const [total,setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((ac,ci) => {
      return ac + ci.price * ci.amount
    },0);
    setTotal(total);
  },[cart]);

  useEffect(() => {
    if(cart){
      const amount = cart.reduce((ac, ci) => {
        return ac+ ci.amount;
      },0);
      setitemAmount(amount);
    }  
  },[cart])

  const addToCart = (product ,id) => {
    const newItem = {...product, amount:1}
    
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
     if(cartItem){
      const newCart = [...cart].map((item) => {
        if(item.id === id){
          return {...item, amount:cartItem.amount+1}
        }else{
          return item;
        }
      });
      setCart(newCart);
     }else{
      setCart([...cart,newItem]);
     }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id 
    });
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([]);
  }

  const increaseAmount = (id) => {
    const cartItem  = cart.find((item) => item.id === id);
    addToCart(cartItem,id);
    
  }

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => { 
      return item.id === id
    });
    if(cartItem){
      const newCart = cart.map((item) => {
        if(item.id === id){
          return {...item, amount: cartItem.amount-1};
        }else{
          return item
        }
      });
      setCart(newCart);
    }

    if(cartItem.amount<2){
      removeFromCart(id);
    }
  }

  return <cartContext.Provider value={{cart,addToCart,removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total}}>{children}</cartContext.Provider>;
};

export default CartProvider;
