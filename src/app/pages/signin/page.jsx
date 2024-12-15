"use client"

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Signin() {
    const {push} = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleFormData = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post("/api/auth/signin", {
                email, password
            })
            if (response.data.status === 404) {
                setError('User not found')
                setSuccess('')
                return
            }
            if (response.data.status === 401) {
                setError('invalid password')
                setSuccess('')
                return
            }
            setEmail('')
            setPassword('')
            setLoading(false)
            if (response.data.status === 200) {
                setSuccess('User signed in successfully')
                setError('')
                push('/')
            }
        } catch (error) {
            setLoading(false)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleFormData} >
                {/* email */}
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={e => setEmail(e.target.value)} value={email} required />
                </div>
                {/* password */}
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} required />
                </div>
                <button type="submit" >
                    {
                        loading ? (
                            <div className="flex items-center justify-center m-2 space-x-2">
                                <div className="w-2 h-2 rounded-full animate-pulse bg-color1"></div>
                                <div className="w-2 h-2 rounded-full animate-pulse bg-color1"></div>
                                <div className="w-2 h-2 rounded-full animate-pulse bg-color1"></div>
                            </div>
                        ) : (
                            "Signin"
                        )
                    }
                </button>
                {error?<p>{error}</p>:""}
                {success?<p>{success}</p>:""}
            </form>
        </div>
    )
}