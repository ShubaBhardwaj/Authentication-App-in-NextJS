import { connectDB } from "@/db/dbconfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {token} = reqBody
        console.log(token)

        const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}});
        if(!user){
            return NextResponse.json({
                error: "Invalid Token",
                status: 401
            })
        }

        user.isverified = true;
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined
        await user.save()

        return NextResponse.json({
            message: "Email Verification Scucessfully",
            success: true,
            status: 200
        })

    } catch (error: any) {
        console.log("error message", error.message)
        return NextResponse.json({
            message: "verifiy mail route fail",
            success: false,
            status: 401
        })
    }
}











