"use client"
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import {useRouter} from 'next/navigation'

const Login = () => {
    const { data: session } = useSession()

    if(session) {
        const router = useRouter()
        router.push('/dashboard')
      }
    return (
        <div className='text-white py-14 container mx-auto' >
            <h1 className='font-bold text-3xl text-center'>SignUp</h1>

            <div className='social-login-button'>
                <div className="flex flex-col gap-2 min-h-screen  items-center p-10">

                    <button className="flex items-center w-64 bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
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
                        <span>Continue with Google</span>
                    </button>

                    <button
                        className="flex items-center w-64 bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        aria-label="Continue with LinkedIn"
                    >
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 44 44" version="1.1">
                            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Color-" transform="translate(-702.000000, -265.000000)" fill="#007EBB">
                                    <path
                                        d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 
                    C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 
                    726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 
                    L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 
                    C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 
                    C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 
                    C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 
                    707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 Z"
                                        id="LinkedIn"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                        <span>Continue with LinkedIn</span>
                    </button>

                    <button
                        className="flex items-center w-64 bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        aria-label="Continue with Twitter"
                    >
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 48 48" version="1.1">
                            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Color-" transform="translate(-300.000000, -164.000000)" fill="#00AAEC">
                                    <path
                                        d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 
                    345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 
                    C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 
                    C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 
                    303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 
                    303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 
                    L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 
                    308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 
                    C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 
                    302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 
                    309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 
                    C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 
                    348,168.735283"
                                        id="Twitter"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                        <span>Continue with Twitter</span>
                    </button>

                    <button
                        className="flex items-center w-64 bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        aria-label="Continue with Facebook"
                    >
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            fill="currentColor"
                        >
                            <path
                                fill="#4460A0"
                                d="M25.64 40h-22c-1.46 0-2.64-1.19-2.64-2.65V10.65C1 9.19 2.19 8 3.64 8h42.71c1.46 0 2.64 1.19 2.64 2.65v26.7c0 1.46-1.19 2.65-2.64 2.65H33.12V24.41h6.24l.94-7.24h-7.18v-4.63c0-2.1.58-3.54 3.6-3.54h3.73V3.54c-.64-.06-2.88-.27-5.54-.27-5.53 0-9.32 3.37-9.32 9.52v5.37h-6.26v7.24h6.26V40z"
                            />
                        </svg>
                        <span>Continue with Facebook</span>
                    </button>

                    <button onClick={()=>{signIn("github")}}
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

                    <button 
                        className="flex items-center w-64 bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        aria-label="Continue with Apple"
                    >
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M15.57 12.1c-.15 1.48.49 2.95 1.63 3.93-.11.34-.49 1.16-1.15 1.92-.68.79-1.38 1.58-2.44 1.6-1.05.02-1.39-.52-2.61-.52-1.22 0-1.59.5-2.6.53-1.02.02-1.8-.86-2.47-1.64-1.7-1.97-3.01-5.57-1.26-8.01.88-1.26 2.29-1.99 3.63-1.97.99.02 1.93.67 2.55.67.6 0 1.72-.84 3.02-.72.52.02 2.46.21 3.63 1.74-.09.06-2.21 1.28-2.23 3.47M13.78 4.49c.74-.91 1.22-2.16 1.09-3.49-1.06.04-2.34.7-3.07 1.59-.67.81-1.26 2.1-1.1 3.36 1.17.1 2.38-.59 3.08-1.46"
                                fill="#000000"
                            />
                        </svg>
                        <span>Continue with Apple</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
