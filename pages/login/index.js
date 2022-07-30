import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'


const Login = () => {

    const router = useRouter();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();
        const data = { email: email, password: password };
        axios.post('https://login-signup-backend.herokuapp.com/auth/login', data)
            .then((res) => {
                console.log(res.data);
                if (!res.data.token) {
                    window.alert(res.data.err);
                } else {
                    localStorage.setItem('token', res.data.token);
                    router.replace('/')
                }
            })
    }

    return (
        <div className="absolute inset-0 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-gray-700 bg-opacity-50 ">
            <div className="max-w-md w-full p-6 bg-white rounded">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl mb-4 text-black">USER LOGIN</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => setadminModal(false)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <div className="mt-0 ">
                    <form onSubmit={handleLogin} className='flex flex-col gap-3'>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-l shadow focus:outline-none "
                            placeholder="Enter you email"
                            required
                        >

                        </input>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-l shadow focus:outline-none "
                            placeholder="Enter you password"
                            required
                        ></input>

                        <button type="submit" className="block w-full p-3 font-bold text-white bg-blue-500 rounded-l">
                            Login
                        </button>
                        <p className="text-sm font-semibold text-black pt-1 mb-0">
                            Do not have an account?
                            <Link href="/signup">
                                <a className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                            > Register</a>
                            </Link>
                            
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login