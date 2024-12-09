"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [success, setSuccess] = useState("")
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleForm = async (e) => {
    e.preventDefault()
    try {
      if (password !== confirmpassword) {
        setError("passwords do not match")
        setSuccess('')
        return
      }
      setIsSubmitting(true)
      const response = await axios.post("/api/signup", {
        name, email, password
      })
      if (response.data.message === "user already exist") {
        setError("User already exist! please login")
        setSuccess('')
        setName('')
        setEmail('')
        setPassword('')
        setConfirmpassword('')
        return
      }
      setSuccess("Sign-up successful!")
      setError('')
      setName('')
      setEmail('')
      setPassword('')
      setConfirmpassword('')
      router.push("/pages/courses")
      console.log(response);
    } catch (error) {
      setError("Sign-up faild. Please try again.")
      setSuccess('')
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <div id="main_container" className="mt-0 min-h-screen flex flex-col items-center  bg-gray-50 px-4 sm:px-6 lg:px-8">
      <h1 className="text-blue-900 font-bold text-3xl sm:text-4xl text-center mb-6">
        Sign Up and Start Learning
      </h1>
      <form onSubmit={handleForm} className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-5">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input type="text" onChange={e => setName(e.target.value)} value={name} id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input type="email" onChange={e => setEmail(e.target.value)} value={email} id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input type="password" onChange={e => setPassword(e.target.value)} value={password} id="password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <div>
          <label htmlFor="confirmpassword" className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input type="password" onChange={e => setConfirmpassword(e.target.value)} value={confirmpassword} id="confirmpassword" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <button type="submit" disabled={isSubmitting} className={`w-full py-2 text-white ${isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-blue-900  hover:bg-blue-800"} rounded-lg font-semibold transition duration-200`}>
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </button>
        {error && <p className="text-center text-red-500 text-sm">{error}</p>}
        {success && <p className="text-center text-green-500 text-sm">{success}</p>}
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

