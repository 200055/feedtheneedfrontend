import { useEffect,useState } from "react";
import axios from "axios";
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./Maps.scss"


const Contact = () => {
	// const [details, setDetails] = useState('');
	const [lat, setlat] = useState('');

    const [long, setlong] = useState('');
    
    const [message, setMessage] = useState('');
	

    useEffect(() => {
        axios.get('http://localhost:90/map', config)
            .then(response => {
                setlat(response.data.data[0].lat)
				setlong(response.data.data[0].long)
                // console.log(lat)
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
    const updateMaps = (e) => {
        e.preventDefault()
		const data ={
			lat: lat,
			long: long,
	}
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('adminticket'),
            }
        }
        console.log(data)

        axios.put("http://localhost:90/map/638c382d1c8a72fb3672cc71", data, config)
            .then((response => {
                if (response.data.msg === "Updated") {
					console.log('add')
                    setMessage("Maps Updated")
					toast.success("Maps Updated Successfully",{
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
          className="forbox w-full max-w-2xl h-fit max-h-lg m-auto py-10 mt-10 px-10 border rounded-lg "
          onSubmit={updateMaps}
        >

          <div className="text-gray-600 font-medium text-3xl py-1">Update Map Details</div>
          <div className="flex flex-col gap-3">
              <label className="text-gray-600 font-medium text-xl">Latitude</label>
              <input 
              value={lat}
              onChange={(e) => {setlat(e.target.value)}}
              className="border-solid border-gray-300 border h-14 py-2 px-4 w-full"
              name="title" placeholder="Insert Latitude" />
            

            
              <label className="text-gray-600 font-medium text-xl">Longitude</label>
              <input 
              value={long}
              onChange={(e) => {setlong(e.target.value)}}
              className="border-solid border-gray-300 border h-14 py-2 px-4 w-full"
              name="title" placeholder="Insert Longitude" />
            
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