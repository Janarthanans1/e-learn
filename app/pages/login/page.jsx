"use client"

import Link from "next/link";

export default function Login() {
  return (
    <div id="main_container" className="mt-0 min-h-screen flex flex-col items-center  bg-gray-50 px-4 sm:px-6 lg:px-8">
    <h1 className="text-blue-900 font-bold text-3xl sm:text-4xl text-center mb-6">
      Login to your Account
    </h1>
    <form className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-5">
      
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      <div>
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Password
        </label>
        <input type="password" id="password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      <button type="submit" className="w-full py-2 text-white bg-blue-900 hover:bg-blue-800 rounded-lg font-semibold transition duration-200">
        Login
      </button>

      <p className="text-center text-gray-600 text-sm">
        You don't have Account with us?{" "}
        <Link href="/pages/signup" className="text-blue-900 hover:underline">
          Signup
        </Link>
      </p>
    </form>
  </div>
  );
}
