import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-end h-screen bg-gray-100 p-6">
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-6 space-y-3">
          {/* Navigate to Signup Page (if implemented) */}
          <button
            onClick={() => navigate("/createAccount")}
            className="w-full bg-purple-600 text-white font-medium py-2 rounded-lg"
          >
            Create Account
          </button>
          
          {/* Navigate to Signin Page */}
          <button
            onClick={() => navigate("/signin")}
            className="w-full bg-purple-200 text-purple-800 font-medium py-2 rounded-lg"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
