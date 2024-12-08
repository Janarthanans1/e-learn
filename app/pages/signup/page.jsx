"use client";
import Link from "next/link";

export default function Signup() {
  return (
    <div id="main_container" className="mt-0 min-h-screen flex flex-col items-center  bg-gray-50 px-4 sm:px-6 lg:px-8">
      <h1 className="text-blue-900 font-bold text-3xl sm:text-4xl text-center mb-6">
        Sign Up and Start Learning
      </h1>
      <form className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-5">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>

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

        <div>
          <label htmlFor="confirmpassword" className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input type="password" id="confirmpassword" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>

        <button type="submit" className="w-full py-2 text-white bg-blue-900 hover:bg-blue-800 rounded-lg font-semibold transition duration-200">
          Sign Up
        </button>

        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link href="/pages/login" className="text-blue-900 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
