import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"
import User from "../../../models/User"
import connectDb from "../../../helpers/Database/db"
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
        await connectDb()
        const { email, password } = await req.json()
        if (!email || !password) {
            return NextResponse.json({ message: "all fields are required", status: 400 })
        }
        let role = "viewer"
        if (password === "main@admin") {
            role = "admin"
        } else if (password === "tutor@mmc") {
            role = "tutor"
        }
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: "user not found", status: 404 })
        }
        const checkpassword = await bcrypt.compare(password, user.password)
        if (!checkpassword) {
            return NextResponse.json({ message: "Invalid password", status: 401 })
        }
        const token = jwt.sign({ email, role }, process.env.JWT_KEY, { expiresIn: "1d" })

        const response = NextResponse.json({ message: "user signed in successfully", status: 200})
        response.headers.append("Set-Cookie",`token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400`)
        return response
    }
     catch (error) {
        return NextResponse.json({message:"Internal server error",status:500})
}
}
