import { useEffect,useState } from "react";
import axios from "axios";
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Contact = () => {
	// const [details, setDetails] = useState('');
	const [company_name, setcompany_name] = useState('');

    const [company_address, setcompany_address] = useState('');
    const [company_phone, setcompany_phone] = useState('');
    const [company_founded, setcompany_founded] = useState('');
    
    const [message, setMessage] = useState('');
	

    useEffect(() => {
        axios.get('http://localhost:90/contact', config)
            .then(response => {
                setcompany_name(response.data.data[0].company_name)
				setcompany_address(response.data.data[0].company_address)
				setcompany_phone(response.data.data[0].company_phone)
				setcompany_founded(response.data.data[0].company_founded)
                // console.log(company_name)
            })
            .catch(e => {
                console.log(e);
            })
    }, [])
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('adminticket'),
        }
    }
    const updateContact = (e) => {
        e.preventDefault()
		const data ={
			company_name: company_name,
			company_address: company_address,
			company_phone: company_phone,
			company_founded: company_founded
	}
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('adminticket'),
            }
        }
        console.log(data)

        axios.put("http://localhost:90/contact/63830eec29a72c5c174768e4", data, config)
            .then((response => {
                if (response.data.msg === "Updated") {
                    setMessage("Contacts Updated")
					toast.success("Contacts Updated Successfully",{
						position:"bottom-right"
					})
                } else {
                    setMessage("invalid")
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
  onSubmit={updateContact}
>
	<div className="text-gray-600 font-medium text-3xl">Update Contacts</div>
	<div>
		<label className="text-gray-600 font-medium">Company Name</label>
		<input 
		value={company_name}
		onChange={(e) => {setcompany_name(e.target.value)}}
		className="border-solid border-gray-300 border py-2 px-4 w-full
		rounded text-gray-700" name="title" placeholder="Insert Company Name" />
	</div>

	<div>
		<label className="text-gray-600 font-medium">Company Address</label>
		<input 
		value={company_address}
		onChange={(e) => {setcompany_address(e.target.value)}}
		className="border-solid border-gray-300 border py-2 px-4 w-full
		rounded text-gray-700" name="title" placeholder="Insert Company Address" />
	</div>
	
	
	<div>
		<label className="text-gray-600 font-medium">Company Phone</label>
		<input 
		value={company_phone}
		onChange={(e) => {setcompany_phone(e.target.value)}}
		className="border-solid border-gray-300 border py-2 px-4 w-full
		rounded text-gray-700" name="title" placeholder="Insert Company Phone." resize/>
	</div>

	<div>
		<label className="text-gray-600 font-medium">Company Founded</label>
		<input 
		value={company_founded}
		onChange={(e) => {setcompany_founded(e.target.value)}}
		className="border-solid border-gray-300 border py-2 px-4 w-full
		rounded text-gray-700" name="title" placeholder="Insert Company Founded" />
	</div>

  
  


  <button
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
export default Contact;