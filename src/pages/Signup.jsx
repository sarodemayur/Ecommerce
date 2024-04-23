import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("value", JSON.stringify(input));
   // localStorage.setItem("details", JSON.stringify(details));
    navigate("/login");
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    const {name,value} = e.target;
    setInput((input) => ({
      ...input,
      [name] : value,
    }));
  }

  // const details = []
  // details.push(input);

  return (
    <div>
      <div className="relatve flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 ">
          <div className="mt-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 flex flex-col justify-center">
            <form
              className="p-6 flex flex-col justify-center border border-[#2a1212a1]"
              onSubmit={handleSubmit}
            >
              <h1 className="text-[26px] font-bold  text-center">Sign-Up</h1>
              {/* <div className="flex flex-col">
             <label htmlFor="Fullname" className="hidden">
                Fullname
             </label>
             <input
             type="Fullname"
             name="Fullname"
             id="Fullname"
             placeholder="Fullname"
             className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
             required
             autoComplete="off"
             ref={Fullname}
             />
            </div> */}
              <div className="flex flex-col">
                <label htmlFor="Username" className="hidden">
                  create username
                </label>
                <input
                  type="Username"
                  name="Username"
                  id="Username"
                  placeholder="Username"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                  autoComplete="on"
                  value={input.Username}
                  onChange= {handleChange}
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="Email" className="hidden">
                  Email
                </label>
                <input
                  type="Email"
                  name="Email"
                  id="Email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                  autoComplete="on"
                  value={input.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="Password" className="hidden">
                  Password
                </label>
                <input
                  type="Password"
                  name="Password"
                  id="Password"
                  placeholder="Password"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                  autoComplete="on"
                  value={input.Password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Register
              </button>
              <div>
                Already have Acoount ?
                <h5
                  className="cursor-pointer underline font-bold"
                  onClick={handleNavigate}
                >
                  Login
                </h5>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
