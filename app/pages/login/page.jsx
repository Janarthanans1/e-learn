"use client"

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')
  const [loading,setLoading] = useState(false)

  const handleForm = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post("/api/login",{
        email,password
      })
      setLoading(true)
      if(response.data.message==="user not found"){
        setError("user not found")
        return
      }
      if(response.data.message==="invalid password"){
        setError("invalid password")
        return
      }
      setSuccess("Logged in successful")
      setEmail('')
      setPassword('')
      router.push("/pages/courses")
      console.log(response);
      
    } catch (error) {
      console.error(error)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div id="main_container" className="mt-0 min-h-screen flex flex-col items-center  bg-gray-50 px-4 sm:px-6 lg:px-8">
    <h1 className="text-blue-900 font-bold text-3xl sm:text-4xl text-center mb-6">
      Login to your Account
    </h1>
    <form onSubmit={handleForm} className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-5">
      
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input type="email" id="email" onChange={e=>setEmail(e.target.value)} value={email} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      <div>
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Password
        </label>
        <input type="password" id="password" onChange={e=>setPassword(e.target.value)} value={password} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      <button type="submit" disabled={loading} className={`w-full py-2 text-white ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-900  hover:bg-blue-800"} rounded-lg font-semibold transition duration-200`}>
        {loading?"Logging...":"Login"}
      </button>
      {error && <p className="text-center text-red-500 text-sm">{error}</p>}
      {success && <p className="text-center text-green-500 text-sm">{success}</p>}
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
