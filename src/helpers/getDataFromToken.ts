import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

interface TokenPayload extends JwtPayload {
  id: string;
  username: string;
  email: string;
}

export const getDataFromToken = (request: NextRequest) => {
    try {
        const encodedToken = request.cookies.get("token")?.value || ''; 
        const decodedToken = jwt.verify(encodedToken, process.env.JWT_SECRATE_KEY!)as TokenPayload;
        return decodedToken.id
    } catch (error: any) {
        throw new Error("Invalid token", error.message);
    }

}








