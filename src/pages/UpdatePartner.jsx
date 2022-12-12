import { useState,useEffect } from "react"
import axios from "axios";
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useParams } from 'react-router-dom'
import "./Maps.scss"

const UpdatePartner = () => {
    const {partner_id } = useParams();

    const [partner_name, setpartner_name] = useState('');
    const [partner_category, setpartner_category] = useState('');
    const [partner_image, setpartner_image] = useState('');
    const [banner_image, setbanner_image] = useState('');
    const [message, setMessage] = useState('');

	useEffect(() => {
        axios.get('http://localhost:90/partner/'+partner_id)
            .then(response => {
                setpartner_name(response.data.data.partner_name)
                setpartner_category(response.data.data.partner_category)
                setpartner_image(response.data.data.partner_image)
                setbanner_image(response.data.data.banner_image)
                // console.log(response.data.data.banner_image)
                // console.log(partner_name)
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    const Update = (e) => {
        e.preventDefault()
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
        
        axios.put("http://localhost:90/partner/update/"+ partner_id, data,config)
            .then((response => {
                if(response.data.msg !=="Invalid Token"){
					
                    setMessage(" Partner updated Sucessfully")
					toast.success("Partner updated Sucessfully",{
						position:"bottom-right"
					})
                    window.location.replace('/dashboard/partner');

                }else{
                    setMessage("Failed To Update Product")
					toast.failed("Failed To Update Product",{
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
  className="forbox w-full max-w-2xl h-fit max-h-lg m-auto py-10 mt-10 px-10 border rounded-lg flex flex-col gap-4"
  onSubmit={Update}
>
	
	<div className="text-gray-600 font-medium text-3xl">Edit Partner</div>
	<div>
		<label className="text-gray-600 font-medium text-xl">Partner Name</label>
		<input 
        value={partner_name}
		onChange={(e) => {setpartner_name(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="title" placeholder="Update Partner Name"  required />
	</div>

	<div>
		<label className="text-gray-600 font-medium text-xl">Partner Category</label>
		<input 
        value={partner_category}
		onChange={(e) => {setpartner_category(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
        name="title" placeholder="Update Partner Name"  required />
	</div>
	
	
	<label class="text-gray-600 font-medium text-xl" for="file_input">Partner Image</label>
	<input 
    // value={partner_image}
	onChange={(e) => {setpartner_image(e.target.files[0])}}
	class="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
    id="file_input" type="file"/>

    <label class="text-gray-600 font-medium text-xl" for="file_input">Banner Image</label>
	<input 
	onChange={(e) => {setbanner_image(e.target.files[0])}}
	class="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700" 
    id="file_input" type="file" />
	
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
export default UpdatePartner;