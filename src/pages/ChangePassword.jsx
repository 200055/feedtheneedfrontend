import { useState } from "react";
import axios from "axios";
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ChangePassword = () => {
	const [currentPassword, setcurrentPassword] = useState('');

    const [newPassword, setnewPassword] = useState('');
    const [confirmNewPassword, setconfirmNewPassword] = useState('');    
    const [message, setMessage] = useState('');
	
    
    const updatePassword = (e) => {
        e.preventDefault()
		const data ={
			currentPassword: currentPassword,
			newPassword: newPassword,
			confirmNewPassword: confirmNewPassword,
	}
        
        if (localStorage.getItem('adminticket')){
            const config = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('adminticket'),
                }
            }
            return axios.post("http://localhost:90/admin/changepassword", data, config)
            .then((response => {
                if (response.data.msg === "Password successfully updated!") {
                    setMessage("Password Updated")
					toast.success("Password Updated",{
						position:"bottom-right"
					})
                } 
                else if(response.data.msg === "Current password is not a match"){
                    setMessage("Password Doesnot match")
					toast.error("Current Password Is Not Correct",{
						position:"bottom-right"
					})
                }
                else if(response.data.msg === "New passwords do not match"){
                    setMessage("Password Doesnot match")
					toast.error("New Password Doesnot match",{
						position:"bottom-right"
					})
                }
                else if(response.data.msg === "Password should be at least six characters"){
                    setMessage("Password should be at least six characters")
					toast.error("Password should be at least six characters",{
						position:"bottom-right"
					})
                }
                else if(response.data.msg === "New Password Cannot Be Same To Old"){
                    setMessage("New Password Cannot Be Same To Old")
					toast.error("New Password Cannot Be Same To Old",{
						position:"bottom-right"
					})
                }
                
                else {
                    setMessage("invalid")
                }
                console.log(response.data.msg);
				
            }))
            .catch()
        }
        if (localStorage.getItem('staffticket')){
            const config = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('staffticket'),
                }
            }
            return axios.post("http://localhost:90/staff/changepassword", data, config)
            .then((response => {
                if (response.data.msg === "Password successfully updated!") {
                    setMessage("Password Updated")
					toast.success("Password Updated",{
						position:"bottom-right"
					})
                } 
                else if(response.data.msg === "Current password is not a match"){
                    setMessage("Password Doesnot match")
					toast.error("Current Password Is Not Correct",{
						position:"bottom-right"
					})
                }
                else if(response.data.msg === "New passwords do not match"){
                    setMessage("Password Doesnot match")
					toast.error("New Password Doesnot match",{
						position:"bottom-right"
					})
                }
                else if(response.data.msg === "Password should be at least six characters"){
                    setMessage("Password should be at least six characters")
					toast.error("Password should be at least six characters",{
						position:"bottom-right"
					})
                }
                else if(response.data.msg === "New Password Cannot Be Same To Old"){
                    setMessage("New Password Cannot Be Same To Old")
					toast.error("New Password Cannot Be Same To Old",{
						position:"bottom-right"
					})
                }
                
                else {
                    setMessage("invalid")
                }
                console.log(response.data.msg);
				
            }))
            .catch()
        }

        
    }
    return (
        <>
		<div>
		<DashboardStatsGrid />
		</div>
        <form
  className="forbox w-full max-w-2xl h-fit max-h-lg m-auto py-10 mt-10 px-10 border rounded-lg flex flex-col gap-4"
  onSubmit={updatePassword}
>
	<div className="text-gray-600 font-medium text-3xl">Update Password</div>
	<div>
		<label className="text-gray-600 font-medium">Current Password</label>
		<input 
        id="currentPassword"
        type="password"
		onChange={(e) => {setcurrentPassword(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="password" placeholder="Insert Current Password" required/>
	</div>

	<div>
		<label className="text-gray-600 font-medium">New Password</label>
		<input 
        id="newPassword"
        type="password"
		onChange={(e) => {setnewPassword(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="password" placeholder="Insert New Password" required />
	</div>
	<div>
        
		<label className="text-gray-600 font-medium">Confirm New Password</label>
		<input 
        id="confirmNewPassword"
        type="password"
		onChange={(e) => {setconfirmNewPassword(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="password" placeholder="Insert Confirm New Password." required/>
	</div>

  <button
    id="changePasswordBtn"
    className="mt-4 w-full bg-blue-400 hover:bg-blue-600 text-blue-100 border shadow py-3 px-6 font-semibold text-md rounded"
    type="submit"
  >
    Submit
  </button>
  <ToastContainer/>
</form>
 
        </>
    )
}
export default ChangePassword;