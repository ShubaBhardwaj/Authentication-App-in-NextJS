
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/db/dbconfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/user.model";

connectDB();

export async function GET(request: NextRequest) {
    try {
        const userID = await getDataFromToken(request)
        const user = await User.findOne({_id: userID}).select("-password")
        return NextResponse.json({
            message: "user found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({
            error: error.message,
            status: 400
        })
    }
}













