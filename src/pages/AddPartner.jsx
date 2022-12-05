import { useState } from "react";
import axios from "axios";
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddPartner = () => {
    const [partner_name, setpartner_name] = useState('');
    const [partner_category, setpartner_category] = useState('');
    const [partner_image, setpartner_image] = useState('');
    const [message, setMessage] = useState('');

	

    const AddBlog = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('partner_name',partner_name);
        data.append('partner_category',partner_category);
        data.append('partner_image',partner_image);
        const config = {
            headers:{
                Authorization : "Bearer " + localStorage.getItem('adminticket'),
            }
        }
        
        axios.post("http://localhost:90/partner/insert", data,config)
            .then((response => {
                if(response.data.msg !=="Invalid Token"){
					
                    setMessage(" Partner added Sucessfully")
					toast.success("Partner added Sucessfully",{
						position:"bottom-right"
					})
                    
                    window.location.replace('/dashboard/partner');
                }else{
                    setMessage("Failed To Add Partner")
					toast.failed("Failed To Add Partner",{
						position:"bottom-right"
					})
                }
                console.log(response.data.msg);
            }))
            .catch()
    }
    return (
        <>
		<div>
		<DashboardStatsGrid />
		</div>
        <form
  className="w-full max-w-lg m-auto py-10 mt-10 px-10 border"
  onSubmit={AddBlog}
>
	
	<div className="text-gray-600 font-medium text-3xl">Add Partner</div>
	<div>
		<label className="text-gray-600 font-medium">Partner Name</label>
		<input 
		onChange={(e) => {setpartner_name(e.target.value)}}
		className="border-solid border-gray-300 border py-2 px-4 w-full
		rounded text-gray-700" name="title" placeholder=" Add Partner Name" autoFocus required />
	</div>

	<div>
		<label className="text-gray-600 font-medium">Patner Category</label>
		<input 
		onChange={(e) => {setpartner_category(e.target.value)}}
		className="border-solid border-gray-300 border py-2 px-4 w-full
		rounded text-gray-700" name="title" placeholder="Add Patner Category" autoFocus required />
	</div>
  
	<label class="text-gray-600 font-medium" for="file_input">Partner Image</label>
	<input 
	onChange={(e) => {setpartner_image(e.target.files[0])}}
	class="border-solid border-gray-300 border py-2 px-4 w-full
		rounded text-gray-700" id="file_input" type="file" required/>
	
  <button
    className="mt-4 w-full bg-blue-400 hover:bg-blue-600 text-blue-100 border shadow py-3 px-6 font-semibold text-md rounded"
    type="submit"
  >
    Submit
  </button>
  <ToastContainer />
</form>
  
    

        </>
    )
}
export default AddPartner;