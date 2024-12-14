import { NextResponse } from "next/server";
import connectDb from "../../../helpers/Database/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs"

export async function POST(req){
    await connectDb()
    try {
        
        const {name,email,password} = await req.json()
        if(!name || !email || !password){
            return NextResponse.json({message:"fill all fields",status:400})
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return NextResponse.json({message:"User already exist",status:400})
        }
        const hashPassword = await bcrypt.hash(password,10)
        const newUser = new User({
            name,
            email,
            password:hashPassword
        })
        await newUser.save()
        return NextResponse.json({message:"user created successfully",status:201})
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({message:"Internal server error",status:500})
    }
}