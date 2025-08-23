import {connectDB} from "@/db/dbconfig";
import User from "@/models/user.model";
import { NextRequest,NextResponse  } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connectDB();

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const {username , email, password} = requestBody;

        if (!username || !email || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        //hasing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

       const newuser = new User({
                username,
                email,
                password: hashedPassword
            })
        const savedUser =  await newuser.save();


        //send email
        try {
            await sendEmail({
                email,
                emailType: "VERIFY",
                userId: savedUser._id,
            });
        } catch (error:any) {
            console.log("Email sending error:", error);
            return NextResponse.json(
                { message: "User created but failed to send verification email", savedUser },
                { status: 201 }
            );
            
        }

        return NextResponse.json(
            {message: "User created successfully",savedUser},
            {status: 201}   
        );

    } catch (error:any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}





