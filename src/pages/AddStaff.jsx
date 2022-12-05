import React from 'react'
import { useState } from "react"
import axios from "axios"
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./Maps.scss"

const AddStaff= ()=> {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const registerStaff = (e) => {
        e.preventDefault()

        const data ={
                username : username,
                email : email,
                password : password,
        }
        const config = {
            headers:{
                Authorization : "Bearer " + localStorage.getItem('adminticket'),
            }
        }
        
        axios.post("http://localhost:90/staff/register", data,config)
            .then((response => {
                if(response.data.msg ==="Registered successfully"){
                    toast.success("Staff Registered",{
						position:"bottom-right"
					})
                    setMessage("Staff Registered")
                    window.location.replace('/dashboard/viewstaff');
                }
                else if (response.data.msg === "Email already exists") {
                    toast.error("Email Already Registered",{
						position:"bottom-right"
					})
                    setMessage("Change Email")
                }
                else{
                    toast.error("Error",{
						position:"bottom-right"
					})
                    setMessage("Staff Registration Failed")
                }
                
                console.log(response.data.msg);
            }))
            .catch()
    }

	return (
		<div>
		<DashboardStatsGrid />
		<div>
        <form
  className="forbox w-full max-w-2xl h-fit max-h-lg m-auto py-10 mt-10 px-10 border rounded-lg flex flex-col gap-4"
  onSubmit={registerStaff}
>
	<div className="text-gray-600 font-medium text-3xl">Add Staff</div>
	<div>
		<label className="text-gray-600 font-medium">Username</label>
		<input 
        id="username"
		onChange={(e) => {setUsername(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
        name="title" placeholder="JohnDoe" required />
	</div>

	<div>
		<label className="text-gray-600 font-medium">Email</label>
		<input 
        type="email"
        id="email"
		onChange={(e) => {setEmail(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
        name="title" placeholder="jhon@email.com" required />
	</div>

	<div>
		<label className="text-gray-600 font-medium">Password</label>
		<input 
        id="password"
        type="password"
		onChange={(e) => {setPassword(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
        name="title" placeholder="******" required/>
	</div>

  <button
    id="addStaffBtn"
    className="mt-4 w-full bg-blue-400 hover:bg-blue-600 text-blue-100 border shadow py-3 px-6 font-semibold text-md rounded"
    type="submit"
  >
    Submit
  </button>
  <ToastContainer/>
</form>
        </div>
		</div>
	)
	
}
export default AddStaff;
