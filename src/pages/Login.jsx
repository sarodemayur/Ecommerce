import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    Email: "",
    Password: "",
});

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("value"));
    if (
      input.Email === loggedUser.Email &&
      input.Password === loggedUser.Password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="relatve flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="p-6 mr-2 bg-white sm:rounded-lg boredr-y ">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 flex flex-col justify-center border border-[#2410107f]">
                <form
                  className="p-6 flex flex-col justify-center"
                  onSubmit={handleSubmit}
                >
                  <h1 className="text-[26px] font-bold  text-center">Login</h1>
                  {/* <div className="flex flex-col">
              <label htmlFor="Username" className="hidden">
                username
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Username"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                required
                autoComplete="off"
              />
            </div> */}
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
                      value={input.name}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                      })
                      }
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
                      autoComplete="on"
                      value={input.name}
                      required
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                      })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300 justify-center"
                  >
                    Login
                  </button>
                  <div>
                    Don't have account ?
                    <div
                      className="cursor-pointer font-bold underline"
                      onClick={handleNavigate}
                    >
                      Sign-up
                    </div>
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

export default Login;
