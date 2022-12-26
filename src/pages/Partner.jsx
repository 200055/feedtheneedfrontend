import { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Link} from "react-router-dom";
import DashboardStatsGrid from "../components/DashboardStatsGrid";

const Parnter = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:90/partner")
            .then(result => {
                console.log(result)
                setDetails(result.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    
    const deletePartner = (partner_id) => {

      if (localStorage.getItem('adminticket')){
        const config = {
          headers: {
              Authorization: "Bearer " + localStorage.getItem('adminticket'),
  
          }
      }
        console.log(partner_id);
        return axios
          .delete("http://localhost:90/partner/" + partner_id, config)
          .then((result) => {
            console.log(result);
            if (result.data.success) {
              toast.success("Partner Deleted",{
						position:"bottom-right"
					});
              window.location.replace('/dashboard/partner');
            } else {
                toast.error("Partner Not Deleted",{
                    position:"bottom-right"
                });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
      if (localStorage.getItem('staffticket')){
        const config = {
          headers: {
              Authorization: "Bearer " + localStorage.getItem('staffticket'),
  
          }
        }
        console.log(partner_id);
        return axios
          .delete("http://localhost:90/partner/staff/" + partner_id, config)
          .then((result) => {
            console.log(result);
            if (result.data.success) {
              toast.success("Partner Deleted",{
						position:"bottom-right"
					});
              window.location.replace('/dashboard/partner');
            } else {
                toast.error("Partner Not Deleted",{
                    position:"bottom-right"
                });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }

       
    }
    return (
        <>
        <DashboardStatsGrid />

		<div class="container max-w-8xl mx-auto mt-8">
  <div class="mb-4">
    <h1 class="text-3xl font-bold decoration-gray-400">Partners</h1>
    <div class="flex justify-end">
        <Link to='/dashboard/partner/create'>
        <button  class="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">Add Partner</button>
        </Link>
      
    </div>
  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Partner Image</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Partner Name</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Banner Image</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Partner Category</th>
              <th class="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colspan="3">
                Action</th>
            </tr>
          </thead>

          <tbody class="bg-white">
            {details.map(singleData=>{
                return(
                    <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                <img className="object-scale-down h-20 w-20 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"  src={"http://localhost:90/" + singleData.partner_image}/>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">{singleData.partner_name}
                </div>
              </td>
              <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
              <div class="flex items-center">
                <img className="object-scale-down h-20 w-20 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"  src={"http://localhost:90/" + singleData.banner_image}/>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{singleData.partner_category}</p>
              </td>

             
              <td class="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                <Link to={'/dashboard/partner/update/'+singleData._id} class="text-indigo-600 hover:text-indigo-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </Link>

              </td>
              <td class="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                <Link onClick={() => {
                            deletePartner(singleData._id);
                          }}><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600 hover:text-red-800"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  </Link>

              </td>
            </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <ToastContainer/>

</div>

        </>
    )
}
export default Parnter;