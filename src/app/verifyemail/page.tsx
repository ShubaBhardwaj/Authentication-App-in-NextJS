"use client"

import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Link from "next/link";

export default function VerifyEmailPage() {

    const [token, setToken] = useState("")
    const [Verified, setVerified] = useState(false)
    const [error, setError] = useState(false)

    const verifyEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', { token })
            setVerified(true)
        } catch (error: any) {
            setError(true)
            console.log("verify email error", error.message, error.response.data)
        }
    }

    useEffect(() => {
        const urltoken = window.location.search.split('=')[1]
        if (urltoken) {
            setToken(urltoken || "");
        }
    }, [])

    useEffect(() => {
        if (token.length > 0) {
            setToken(token);
            verifyEmail();
        }
    }, [token])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className='text-4xl font-bold'>Verify Your Email</h1>
            <h2>{Verified ? "Email verified successfully!" : error ? "Email verification failed." : "Verifying email..."}</h2>
            <h2 className='p-2 rounded bg-orange-500 text-black'>{token ? "Token found." : "No token found."}</h2>
            {Verified && <div>
                <h2 className='text-2xl bg-green-500'>
                Back to login page </h2>
                <Link href="/login">Login</Link>
                </div>}
            {error && <div>
                <h2 className='text-2xl bg-red-500'>
                Something went wrong </h2>
                </div>}
        </div>
    )
}


