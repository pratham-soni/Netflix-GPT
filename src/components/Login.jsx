import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute p-12 bg-black w-[400px] mt-24 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <p className="text-4xl p-1 mb-2 text-white font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full rounded-[5px] border border-gray-500 bg-black bg-opacity-20 text-white"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-3 w-full rounded-[5px] border border-gray-500 bg-black bg-opacity-20 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full rounded-[5px] border border-gray-500 bg-black bg-opacity-20 text-white"
        />
        <button className="p-2 my-3 rounded-[5px] bg-red-500 w-full text-white ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}
          <span className="text-white cursor-pointer hover:underline">
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
