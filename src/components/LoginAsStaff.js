import { useState } from "react";
import React from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Link} from "react-router-dom";

const LoginAsStaff=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');;

    const loginAdmin = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
        }
        console.log(data)
            axios.post("http://localhost:90/staff/login", data)
            .then((response) => {
                console.log(response.data.token)
                if (response.data.token) {
                    localStorage.setItem('staffticket', response.data.token)
                    toast.success("Logging in",{
						position:"top-center"
					})
                    window.location.replace('/dashboard')
                }
                else {
                    toast.error("Invalid Login Credintials",{
						position:"top-center"
					})
                    setMessage("Invalid Login Credintials")
                }
            })
            .catch()
    }
   
    return(
        <>
        <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />

        <div class="min-h-screen flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login As Staff</div>
            <div class="relative mt-10 h-px bg-gray-300">
            <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                <span class="bg-white px-4 text-xs text-gray-500 uppercase">Login With Email</span>
            </div>
            </div>
            <div class="mt-10">
            <form onSubmit={loginAdmin}>
                <div class="flex flex-col mb-6">
                <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                <div class="relative">
                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    </div>

                    <input id="email" type="email" onChange={(e) => { setEmail(e.target.value) }} name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                </div>
                </div>
                <div class="flex flex-col mb-6">
                <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                <div class="relative">
                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
                    </div>

                    <input id="password" type="password" onChange={(e) => { setPassword(e.target.value) }} name="password" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" required/>
                </div>
                </div>

                <div class="flex w-full">
                <button type="submit" id="loginBtn" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                    <span class="mr-2 uppercase">Login</span>
                    <span>
                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </span>
                </button>
                </div>

                <Link to ='/'>
                <div class="flex w-full mt-4">
                <button type="button" id="loginasStaffBtn" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                
                    <span class="mr-2 uppercase">Login As Admin</span>
                    <span>
                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </span>
                    
                </button>
               
                </div>
                </Link>

                <div>
                <img src="img/login.png" alt="" />
                </div>
            </form>
            </div>
            
        </div>
        </div>
        <ToastContainer/>
        </>
    )

}
export default LoginAsStaff;