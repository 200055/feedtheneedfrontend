import { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Link} from "react-router-dom";
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import { getOrderStatus } from '../lib/helpers'

const RefundRequest = () => {
    const [details, setDetails] = useState([]);

    const config = {
      headers: {
          Authorization: "Bearer " + localStorage.getItem('adminticket'),
      }
    }

    useEffect(() => {
        axios.get("http://localhost:90/all_refund_request",config)
            .then(result => {
                setDetails(result.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    const cancelDonation = (refund_id) => {
        const config = {
          headers: {
              Authorization: "Bearer " + localStorage.getItem('adminticket'),
  
          }
        }
        if (window.confirm('Are you sure you want to Refund?')) {
          return axios
          .delete("http://localhost:90/refund_request/" + refund_id, config)
          .then((result) => {
            console.log(result.data.message);
            if (result.data.message === "Refunded & Transaction deleted successfully") {
              toast.success("Refunded",{
            position:"bottom-right"
          });
              window.location.replace('/dashboard/refund_requests');
            } else {
                toast.error("Cannot Be Refunded",{
                    position:"bottom-right"
                });
            }
          })
          .catch((e) => {
            console.log(e);
          });
        }
        
      }

      const deleteRequest = (refund_id) => {
        const config = {
          headers: {
              Authorization: "Bearer " + localStorage.getItem('adminticket'),
  
          }
        }
        if (window.confirm('Are you sure you want to Delete Request?')) {
          return axios
          .delete("http://localhost:90/delete_only_refund_request/" + refund_id, config)
          .then((result) => {
            if (result.data.message === "Refunded Request Deleted successfully") {
              toast.success("Request Deleted",{
            position:"bottom-right"
          });
              setTimeout(() => window.location.replace('/dashboard/refund_requests'), 500)
            } else {
                toast.error("Cannot Be Refunded",{
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
    <h1 class="text-3xl font-bold decoration-gray-400">Refund Requests</h1>
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
                Donation Amount</th>
                <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Feedback</th>
                <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Refund Reason</th>
                <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Donation Status</th>
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
                <div class="text-sm leading-5 text-gray-900">{singleData.user_id.email}
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{singleData.user_id.phone}</p>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{singleData.transaction_id.donation_amount}</p>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{singleData.feedback}</p>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{singleData.refund_reason}</p>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{getOrderStatus(singleData.transaction_id.donation_status)}</p>
              </td>


              {/* <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                <span>12/12/22</span>
              </td> */}
              <td class="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                {
                  singleData.transaction_id.donation_status === "Used" ?(
                    <button type="button" onClick={()=>{
                      deleteRequest(singleData._id);
                    }}
                    className="text-red-600 hover:text-white border border-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"> Delete Request</button>
                  ): singleData.transaction_id.donation_status === "Pending" ?(
                    <button type="button"
                    disabled
                    className="text-red-600 hover:text-white border border-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Waiting to Recieve Money</button>
                  ): (<button type="button" onClick={()=>{
                    cancelDonation(singleData._id);
                  }}
                  className="text-sky-600 hover:text-white border border-sky-700 hover:bg-sky-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-900">Cancel Donation</button>
                  )}
                
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
export default RefundRequest;