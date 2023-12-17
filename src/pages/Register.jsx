import React, { useState } from "react";

import axios from "axios";
import { base_url } from "../utils/config";

function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${base_url}/api/auth/user/register`,
        state
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-[370px] text-slate-600">
        <div className="bg-white h-full shadow-sm px-7 py-8 rounded-md">
          <h2 className="text-2xl font-semibold text-center">Register</h2>
          <p className="text-sm text-center mt-2 mb-4">
            Please register to your account and start the advanture
          </p>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={inputHandler}
                value={state.name}
                type="text"
                name="name"
                id="name"
                placeholder="name"
                required
                className="px-3 py-[6px] outline-none border border-slate-200 bg-transparent rounded-md focus:border-indigo-500 overflow-hidden"
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandler}
                value={state.email}
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
                className="px-3 py-[6px] outline-none border border-slate-200 bg-transparent rounded-md focus:border-indigo-500 overflow-hidden"
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandler}
                value={state.password}
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required
                className="px-3 py-[6px] outline-none border border-slate-200 bg-transparent rounded-md focus:border-indigo-500 overflow-hidden"
              />
            </div>

            <button className="bg-indigo-500 w-full hover:bg-indigo-600 text-white rounded-md px-7 py-[6px] text-md">
              Register
            </button>

            <div className="w-full gap-1 mt-5">
              Already have account? Please{" "}
              <a
                href="/login"
                className="text-blue-600 visited:text-purple-600"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
