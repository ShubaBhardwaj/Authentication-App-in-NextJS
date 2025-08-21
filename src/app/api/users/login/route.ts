import {connectDB} from "@/db/dbconfig";
import User from "@/models/user.model";
import { NextRequest,NextResponse  } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

connectDB();

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const {email, password} = requestBody;

        if(!email || !password){
            return NextResponse.json({message: "Please enter the all values"})
        }

        const user = await User.findOne({email})
        if (!user) {
            return NextResponse.json({message: "User is not exist please create you account first", staus: 401 })
        }

        const isvalid  = await bcrypt.compare(password, user.password)
        if(!isvalid){
            return NextResponse.json({message: "User's password is not correct please enter correct password", staus: 401 })
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRATE_KEY!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "User logged in successfully",
            success: true,
        })

        response.cookies.set("token", token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60,
        })

        return response;

    } catch (error:any) {
        return NextResponse.json({ message: error.message ,  status: 500 });
    }
}








