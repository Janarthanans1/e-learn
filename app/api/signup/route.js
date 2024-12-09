import { NextResponse } from "next/server";
import User from "../../models/User"
import bcrypt from "bcrypt"
import connectDb from "../../lib/db"

export async function POST(req){
    await connectDb()
    try {
        const {name,email,password} = await req.json()
        if(!name || !email || !password){
            return NextResponse.json({message:"All fields are required",status:400})
        }
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({message:"user already exist",status:400})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const role = "viewer"
        const newUser = new User({
            name,email,password:hashedPassword,role
        }) 
        await newUser.save()
        return NextResponse.json({message:"user register successfully",status:201})
    } catch (error) {
        return NextResponse.json({message:error,status:500})
    }
}