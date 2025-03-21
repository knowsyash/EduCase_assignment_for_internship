import React from 'react'

const Sign = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-6">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900">Signin to your PopX account</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-purple-600 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            />
          </div>
          <div>
            <label className="text-purple-600 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-700 font-medium py-2 rounded-lg"
          >
            Login
          </button>
        </form>

        <p
          className="text-purple-600 text-center mt-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Back to Home
        </p>
      </div>
    </div>
  )
}

export default Sign