
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const res = NextResponse.json({
            message: "User logged out successfully.",
            success: true,
            status: 200
        })
    
        res.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        })
    
        return res
    } catch (error:any) {
        console.error("Error logging out user:", error)
        return NextResponse.json({
            message: "Error logging out user.",
            success: false,
            status: error.status || 500
        })
    }
}



