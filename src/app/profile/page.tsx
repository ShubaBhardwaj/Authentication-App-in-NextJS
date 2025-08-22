"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function ProfilePage() {
    const router = useRouter();

    const Logout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error: any) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <div className="h-screen bg-black flex flex-col md:flex-row">
            {/* Image Section - Hidden on mobile, shown on md and up */}
            <div className="hidden md:flex md:flex-1 bg-neutral-900 items-center justify-center ">
                <div className="w-full h-full bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden">
                    <img
                        src="images/signup_page.png"
                        alt="Handmade crafts"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-7xl ">
                        YOUR PROFILE
                        <div>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200"
                                    onClick={Logout}>
                                Logout
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
