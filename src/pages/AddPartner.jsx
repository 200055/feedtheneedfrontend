import { useState } from "react";
import axios from "axios";
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./Maps.scss"

const AddPartner = () => {
    const [partner_name, setpartner_name] = useState('');
    const [partner_category, setpartner_category] = useState('');
    const [partner_image, setpartner_image] = useState('');
    const [banner_image, setbanner_image] = useState('');
    const [message, setMessage] = useState('');

    const AddPartner = (e) => {
        e.preventDefault()

        if(localStorage.getItem('adminticket')){
            const data = new FormData();
            data.append('partner_name',partner_name);
            data.append('partner_category',partner_category);
            data.append('partner_image',partner_image);
            data.append('banner_image',banner_image);
            const config = {
                headers:{
                    Authorization : "Bearer " + localStorage.getItem('adminticket'),
                }
            }
            
           return axios.post("http://localhost:90/partner/insert", data,config)
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
        if (localStorage.getItem('staffticket')) {
            const data = new FormData();
            data.append('partner_name',partner_name);
            data.append('partner_category',partner_category);
            data.append('partner_image',partner_image);
            data.append('banner_image',banner_image);
            const config = {
                headers:{
                    Authorization : "Bearer " + localStorage.getItem('staffticket'),
                }
            }
            
            return axios.post("http://localhost:90/partner/staff/insert", data,config)
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
        
    }
    return (
        <>
		<div>
		<DashboardStatsGrid />
		</div>
        <form
  className="forbox w-full max-w-2xl h-fit max-h-lg m-auto py-10 mt-10 px-10 border rounded-lg flex flex-col gap-4"
  onSubmit={AddPartner}
>
	
	<div className="text-gray-600 font-medium text-3xl">Add Partner</div>
	<div>
		<label className="text-gray-600 font-medium text-xl">Partner Name</label>
		<input 
		onChange={(e) => {setpartner_name(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="title" placeholder=" Add Partner Name" autoFocus required />
	</div>

	<div>
		<label className="text-gray-600 font-medium text-xl">Patner Category</label>
		<input 
		onChange={(e) => {setpartner_category(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="title" placeholder="Add Patner Category" autoFocus required />
	</div>
  
	<label class="text-gray-600 font-medium text-xl" for="file_input">Partner Image</label>
	<input 
	onChange={(e) => {setpartner_image(e.target.files[0])}}
	class="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
    id="file_input" type="file" required/>

    <label class="text-gray-600 font-medium text-xl" for="file_input">Banner Image</label>
	<input 
	onChange={(e) => {setbanner_image(e.target.files[0])}}
	class="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
    id="file_input" type="file" required/>
	
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