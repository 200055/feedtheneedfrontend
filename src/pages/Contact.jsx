import { useEffect,useState } from "react";
import axios from "axios";
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./Maps.scss"


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
        if (localStorage.getItem('adminticket')){
            const config = {
              headers: {
                  Authorization: "Bearer " + localStorage.getItem('adminticket'),
      
              }
            }
            const data ={
                company_name: company_name,
                company_address: company_address,
                company_phone: company_phone,
                company_founded: company_founded
            }
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
          if (localStorage.getItem('staffticket')){
            const config = {
              headers: {
                  Authorization: "Bearer " + localStorage.getItem('staffticket'),
      
              }
            }
            const data ={
                company_name: company_name,
                company_address: company_address,
                company_phone: company_phone,
                company_founded: company_founded
            }
    
            axios.put("http://localhost:90/staff/contact/63830eec29a72c5c174768e4", data, config)
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
		
    }
    return (
        <>
		<div>
		<DashboardStatsGrid />
		</div>
        
        <form
  className="forbox w-full max-w-2xl h-fit max-h-lg m-auto py-10 mt-10 px-10 border rounded-lg flex flex-col gap-4"
  onSubmit={updateContact}
>
    <div className="text-gray-600 font-medium text-3xl">Update Contacts</div>
	<div>
		<label className="text-gray-600 font-medium text-xl">Company Name</label>
		<input 
        id="companyName"
		value={company_name}
		onChange={(e) => {setcompany_name(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
         name="title" placeholder="Insert Company Name" required/>
	</div>

	<div>
		<label className="text-gray-600 font-medium text-xl">Company Address</label>
		<input
        id="companyAddress" 
		value={company_address}
		onChange={(e) => {setcompany_address(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
         name="title" placeholder="Insert Company Address" required />
	</div>
	
	
	<div>
		<label className="text-gray-600 font-medium text-xl">Company Phone</label>
		<input 
        id="companyPhone"
		value={company_phone}
		onChange={(e) => {setcompany_phone(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
         name="title" placeholder="Insert Company Phone." required/>
	</div>

	<div>
		<label className="text-gray-600 font-medium text-xl">Company Founded</label>
		<input 
        id="companyFounded"
		value={company_founded}
		onChange={(e) => {setcompany_founded(e.target.value)}}
		className="border-solid border-gray-300 border h-14 py-2 px-4 w-full rounded-lg text-gray-700"
         name="title" placeholder="Insert Company Founded" required />
	</div>

  <button
    id="updateBtn"
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