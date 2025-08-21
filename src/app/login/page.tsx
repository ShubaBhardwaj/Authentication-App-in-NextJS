"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { log } from "console";
import { toast } from "react-hot-toast";
import { set } from "mongoose";


export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [focusedField, setFocusedField] = useState<keyof typeof formData | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault(); // stop form from reloading
      setLoading(true);
      const response = await axios.post("/api/users/login", formData);
      console.log("Login successful", response.data);
      toast.success("Login successful");
      router.push("/profile");
    } catch (error: any) {
      console.log("Error while login", error.message);
      toast.error("Error while login",error.message);
    }finally{
      setLoading(false);
    }
  }

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
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-black flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-700 rounded-2xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-neutral-400 text-base">Sign in to your account</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={onLogin}>
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className={
                    "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 " +
                    (focusedField === "email" ? "text-orange-500" : "text-neutral-500")
                  }
                />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email address"
                  className={
                    "w-full pl-11 pr-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 " +
                    (focusedField === "email" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500")
                  }
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="relative">
                <Lock
                  className={
                    "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 " +
                    (focusedField === "password" ? "text-orange-500" : "text-neutral-500")
                  }
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your password"
                  className={
                    "w-full pl-11 pr-12 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 " +
                    (focusedField === "password" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500")
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange("rememberMe", e.target.checked)}
                  className="w-4 h-4 bg-neutral-800 border-2 border-neutral-600 rounded focus:ring-orange-500 focus:ring-2 text-orange-500"
                />
                <label htmlFor="rememberMe" className="text-sm text-neutral-300">
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors duration-200 text-base mt-8"
              // onClick={onLogin}
            >
              {loading?"Loading...":"Login"}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-neutral-400 text-base">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


