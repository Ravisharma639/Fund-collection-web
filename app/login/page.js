"use client"
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {
    const { data: session } = useSession()

    if (session) {
        const router = useRouter()
        router.push('/dashboard')
    }
    return (
        <div className='text-white py-14 container mx-auto' >
            <h1 className='font-bold text-3xl text-center'>SignUp</h1>

            <div className='social-login-button'>
                <div className="flex flex-col gap-2 min-h-screen  items-center p-10">


                    <button onClick={() => signIn("google")} className="flex items-center w-64 bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
                                <g fill="none" fillRule="evenodd">
                                    <g transform="translate(-401.000000, -860.000000)">
                                        <g transform="translate(401.000000, 860.000000)">
                                            <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" fill="#FBBC05"></path>
                                            <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" fill="#EB4335"></path>
                                            <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" fill="#34A853"></path>
                                            <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" fill="#4285F4"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </svg>
                        <span>Continue with Google</span>
                    </button>


                    <button onClick={() => { signIn("github") }}
                        className="flex items-center w-64 bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        aria-label="Continue with GitHub"
                    >
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.486 2 12c0 4.418 2.865 8.166 6.839 9.49.5.09.682-.216.682-.48 
            0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.455-1.158-1.11-1.467-1.11-1.467-.907-.62.069-.607.069-.607 
            1.003.07 1.531 1.034 1.531 1.034.89 1.525 2.337 1.085 2.905.83.09-.646.349-1.085.635-1.335-2.22-.253-4.555-1.112-4.555-4.943 
            0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.273.098-2.65 0 0 .84-.269 2.75 1.025A9.612 9.612 0 0 1 12 6.845c.85.004 
            1.705.114 2.5.334 1.91-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.397.1 2.65.64.698 1.028 1.59 1.028 2.682 0 3.841-2.339 
            4.687-4.565 4.936.359.31.678.923.678 1.86 0 1.345-.012 2.428-.012 2.76 0 .267.18.575.688.477C19.138 20.162 22 16.418 22 
            12c0-5.514-4.486-10-10-10Z"
                                fill="#000000"
                            />
                        </svg>
                        <span>Continue with GitHub</span>
                    </button>


                </div>
            </div>
        </div>
    );
}

export default Login;
