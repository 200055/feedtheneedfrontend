import { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Link} from "react-router-dom";
import DashboardStatsGrid from "../components/DashboardStatsGrid";

const User = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:90/users")
            .then(result => {
                setDetails(result.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('adminticket'),
        }
    }

    return (
        <>
        <DashboardStatsGrid />

		<div class="container max-w-8xl mx-auto mt-8">
  <div class="mb-4">
    <h1 class="text-3xl font-bold decoration-gray-400">Users</h1>
    {/* <div class="flex justify-end">
        <Link to='/dashboard/blog/create'>
        <button  class="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">Create Blog</button>
        </Link>
      
    </div> */}
  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              {/* <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Image</th> */}
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Email</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Phone</th>
                <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Donation Point</th>
              <th class="px-6 py-3 text-sm text-center text-gray-500 border-b border-gray-200 bg-gray-50" colspan="3">
                Action</th>
            </tr>
          </thead>

          <tbody class="bg-white">
            {details.map(singleData=>{
                return(
                    <tr>
              {/* <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                <img className="object-scale-down h-20 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"  src={"http://localhost:90/" + singleData.blog_image}/>
                </div>
              </td> */}

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">{singleData.email}
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{singleData.phone}</p>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{singleData.donation_point}</p>
              </td>


              {/* <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                <span>12/12/22</span>
              </td> */}
              <td class="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                <Link to={'/dashboard/viewuser/user_transaction/'+singleData._id} class="text-indigo-600 hover:text-indigo-900">
                  <svg class="w-full h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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
export default User;