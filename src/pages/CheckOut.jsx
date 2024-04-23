import React, { useContext, useRef, useState } from "react";
import { cartContext } from "../contexts/Cartcontext";
import CartItem from "../components/CartItem";
import jsPDF from 'jspdf';

const CheckOut = () => {
  const [input, setInput] = useState({
    Fullname:"",
    FullAddress:"",
    Address:"",
    State:"",
    Phone:""
  });

  const {Fullname,FullAddress,Address,State,Phone} = input;
  const { cart, total, itemAmount, clearCart } = useContext(cartContext);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDownload = () => {
     const doc = new jsPDF();
     doc.text(`User Details`,90,10)
     doc.text(`Fullname : ${Fullname}`,10,20)
     doc.text(`FullAddress : ${FullAddress}`,10,30)
     doc.text(`Address : ${Address}`,10,40)
     doc.text(`State :${State}`,10,50)
     doc.text(`Phone : ${Phone}`,10,60)
     doc.text(`Prodcts`, 90,70)
     
     let startY = 80;
     cart.forEach((item,index) => {
      const {title, price} = item;
      const yPos = startY + index *20;
      doc.text(`Item ${index+1}:${title} Price:$${price}`,10,yPos)
     })
     doc.save('test.pdf');
     clearCart();
    };

    const handleChange = (e) => {
      const{name, value} = e.target;
      setInput((prevInput) => ({
        ...prevInput,
        [name] : value,
      }));
    }

  return (
    <>
      <section className="pt-32 pb-12 lg:py-32 flex items-center">
        <div className="container mx-auto">
          <div>
            <h1 className="text-center font-bold text-[20px] underline">
              Checkout
            </h1>
          </div>
          <div className="container m-auto px-6 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="container col-3 mt-1 flex-auto flex-space-x-4">
                <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
                  {cart.map((item) => {
                    return <CartItem item={item} key={item} />;
                  })}
                  <div>
                    <div className="flex w-full justify-between items-center">
                      <div className="font-bold text-[15px] underline">
                        You have {itemAmount} products in cart.
                      </div>
                      <div className="font-bold underline">
                        <span>Total Price : </span> ${" "}
                        {parseFloat(total).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="container m-auto px-6 md:px-12 xl:px-6 items-center">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 items-center">
                      <div className="container col-3 mt-3 flex-auto flex-space-x-4 items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                          <div className="p-6 flex flex-col justify-center ">
                            <form
                              className="p-6 flex flex-col justify-center border border-primary "
                              onSubmit={handleSubmit}
                              ref={formRef}
                            >
                              <h3 className="font-bold underline text-center text-[20px]">
                                Enter Details
                              </h3>
                              <div className="flex flex-col  ">
                                <label htmlFor="Fullname" className="hidden">
                                  Fullname
                                </label>
                                <input
                                  type="text"
                                  name="Fullname"
                                  id="Fullname"
                                  placeholder="Full Name"
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                  required
                                  autoComplete="on"
                                  value={input.Fullname}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="flex flex-col">
                                <label htmlFor="Address" className="hidden">
                                  Address
                                </label>
                                <input
                                  type="textarea"
                                  name="FullAddress"
                                  id="Address"
                                  placeholder="Enter Delivery Address"
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                  required
                                  autoComplete="on"
                                  value={input.FullAddress}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="flex flex-col ">
                                <label htmlFor="Address" className="hidden">
                                  Address
                                </label>
                                <input
                                  type="textarea"
                                  name="Address"
                                  id="Address"
                                  placeholder="Address"
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                  required
                                  autoComplete="on"
                                  value={input.Address}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="flex flex-col ">
                                <label htmlFor="State" className="hidden">
                                  State
                                </label>
                                <input
                                  type="text"
                                  name="State"
                                  id="State"
                                  placeholder="State"
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                  required
                                  autoComplete="on"
                                  value={input.State}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="flex flex-col ">
                                <label htmlFor="Phone" className="hidden">
                                  Phone
                                </label>
                                <input
                                  type="Number"
                                  name="Phone"
                                  id="Phone"
                                  placeholder="phone"
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                  required
                                  autoComplete="on"
                                  value={input.Phone}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="items-center justify-evenly">
                                <button
                                  onClick={handleDownload}
                                  type="submit"
                                  className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                                >
                                  Place Order
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
