import { NextResponse } from "next/server"
import User from "../../models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(req){
    try {
        const {email,password} = await req.json()
        if(!email || !password){
            return NextResponse.json({message:"All fields are required",status:400})
        }
        const user = await User.findOne({email})
        if(user){
            const name = user.name
            const email = user.email
            const role = user.role
            const comparePassword = await bcrypt.compare(password,user.password)
            if(!comparePassword){
                return NextResponse.json({message:"invalid password",status:400})
            }
            const token = jwt.sign({name,email,role},process.env.JWT_KEY,{
                expiresIn:"1d"
            })

            const response = NextResponse.json({message:"logged in successful",status:200})
            response.cookies.set('token',token,{
                httpOnly:true,
                secure:process.env.NODE_ENV === "production"
            })
            return response
        }else{
            return NextResponse.json({message:"user not found",status:400})
        }
    } catch (error) {
        return NextResponse.json({message:"server error",status:500})
        console.log(error);
        
    }
    
}