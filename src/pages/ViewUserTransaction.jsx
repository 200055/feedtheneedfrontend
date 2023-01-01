import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { format } from 'date-fns'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Link} from "react-router-dom";
import { getOrderStatus } from '../lib/helpers'
import DashboardStatsGrid from "../components/DashboardStatsGrid";

const ViewUserTransaction = () => {
    const {user_id} = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        if (localStorage.getItem('adminticket')){
          const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('adminticket'),
            }
          }
          axios.get("http://localhost:90/admin/user_transaction/"+user_id, config)
            .then(result => {
                setDetails(result.data.data)
            })
            .catch(e => {
                console.log(e)
            })
          }
          if (localStorage.getItem('staffticket')){
            const config = {
              headers: {
                  Authorization: "Bearer " + localStorage.getItem('staffticket'),
              }
            }
    
            axios.get("http://localhost:90/staff/user_transaction/"+user_id, config)
            .then(result => {
                setDetails(result.data.data)
            })
            .catch(e => {
                console.log(e)
            })
          }
      }
    
      fetchData();
    }, [])
    
    const donationReceived = (transcation_id) => {
		
      if (localStorage.getItem('adminticket')){
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('adminticket'),
        }
      }	
          const data ={
        donation_status : 'Received'
      }
      return axios.put("http://localhost:90/change_donation_status/" + transcation_id,data, config)
        .then((result) => {
          console.log(result);
          if (result.data.success) {
          toast.success("Donation Verification is now Received",{
          position:"bottom-right"
        });
          setTimeout(() => window.location.replace('/dashboard/viewuser/user_transaction/'+user_id), 500)
          } else {
            toast.error("Donation Failed",{
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
        const data ={
        donation_status : 'Received'
      }
        console.log(transcation_id);
        return axios.put("http://localhost:90/staff/change_donation_status/" + transcation_id,data, config)
        .then((result) => {
          console.log(result);
          if (result.data.success) {
          toast.success("Donation Verification is now Received",{
          position:"bottom-right"
        });
          setTimeout(() => window.location.replace('/dashboard/viewuser/user_transaction/'+user_id), 500)
          } else {
            toast.error("Donation Failed",{
              position:"bottom-right"
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
      }
        
      }
  
      const donationPending = (transcation_id) => {
      
        if (localStorage.getItem('adminticket')){
        const config = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('adminticket'),
          }
        }	
        const data ={
          donation_status : 'Pending'
        }
        return axios.put("http://localhost:90/change_donation_status/" + transcation_id,data, config)
          .then((result) => {
            console.log(result);
            if (result.data.success) {
            toast.error("Donation Verification is now Pending",{
            position:"bottom-right"
          });
            setTimeout(() => window.location.replace('/dashboard/viewuser/user_transaction/'+user_id), 500)
            } else {
              toast.error("Donation Verification Failed",{
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
          const data ={
            donation_status : 'Pending'
          }
          return axios.put("http://localhost:90/staff/change_donation_status/" + transcation_id,data, config)
            .then((result) => {
              console.log(result);
              if (result.data.success) {
              toast.error("Donation Verification is now Pending",{
              position:"bottom-right"
            });
              setTimeout(() => window.location.replace('/dashboard/viewuser/user_transaction/'+user_id), 500)
              } else {
                toast.error("Donation Verification Failed",{
                  position:"bottom-right"
                });
              }
            })
            .catch((e) => {
              console.log(e);
            });
          }
          
        }
  
        const donationUsed = (transcation_id) => {
      
          if (localStorage.getItem('adminticket')){
          const config = {
            headers: {
              Authorization: "Bearer " + localStorage.getItem('adminticket'),
            }
          }	
          const data ={
            donation_status : 'Used'
          }
          return axios.put("http://localhost:90/change_donation_status/" + transcation_id,data, config)
            .then((result) => {
              console.log(result);
              if (result.data.success) {
              toast.success("Donation Verification is now Used",{
              position:"bottom-right"
            });
              setTimeout(() => window.location.replace('/dashboard/viewuser/user_transaction/'+user_id), 500)
              } else {
                toast.error("Donation Verification Failed",{
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
            const data ={
            donation_status : 'Used'
          }
          return axios.put("http://localhost:90/staff/change_donation_status/" + transcation_id,data, config)
            .then((result) => {
              console.log(result);
              if (result.data.success) {
              toast.success("Donation Verification is now Used",{
              position:"bottom-right"
            });
              setTimeout(() => window.location.replace('/dashboard/viewuser/user_transaction/'+user_id), 500)
              } else {
                toast.error("Donation Verification Failed",{
                  position:"bottom-right"
                });
              }
            })
            .catch((e) => {
              console.log(e);
            });
          }
            
          }
  
          const donationUnused = (transcation_id) => {
      
            if (localStorage.getItem('adminticket')){
            const config = {
              headers: {
                Authorization: "Bearer " + localStorage.getItem('adminticket'),
              }
            }	
            const data ={
              donation_status : 'Unused'
            }
            return axios.put("http://localhost:90/change_donation_status/" + transcation_id,data, config)
              .then((result) => {
                console.log(result);
                if (result.data.success) {
                toast.error("Donation Verification is now Unused",{
                position:"bottom-right"
              });
                setTimeout(() => window.location.replace('/dashboard/viewuser/user_transaction/'+user_id), 500)
                } else {
                  toast.error("Donation Verification Failed",{
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
              const data ={
              donation_status : 'Unused'
            }
            return axios.put("http://localhost:90/staff/change_donation_status/" + transcation_id,data, config)
              .then((result) => {
                console.log(result);
                if (result.data.success) {
                toast.error("Donation Verification is now Unused",{
                position:"bottom-right"
              });
                setTimeout(() => window.location.replace('/dashboard/viewuser/user_transaction/'+user_id), 500)
                } else {
                  toast.error("Donation Verification Failed",{
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
                Donor Name</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Donor Note</th>
                <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Donor Address</th>
                <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Donation Amount</th>
                <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Donation Category</th>
                <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Donation Date</th>
                <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Donation Status</th>
              <th class="px-6 py-3 text-sm text-center text-gray-500 border-b border-gray-200 bg-gray-50" colspan="3">
                Verify</th>
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
                <div class="text-sm leading-5 text-gray-900">{singleData.donor_name}
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{singleData.donor_note}</p>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{singleData.donor_address}</p>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>Rs.{singleData.donation_amount}</p>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{singleData.donation_category}</p>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{format(new Date(singleData.created_at), 'dd MMM yyyy')}</p>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>{getOrderStatus(singleData.donation_status)}</p>
              </td>



              {/* <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                <span>12/12/22</span>
              </td> */}
              <td class="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
              {
									singleData.donation_status === 'Pending'?
									(
										<button type="button" onClick={()=>{
											donationReceived(singleData._id);
										}}
										 className="text-green-600 hover:text-white border border-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Received</button>
		
									):
									(
											
								<button type="button" onClick={()=>{
									donationPending(singleData._id);
								}}
								className="text-red-600 hover:text-white border border-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Pending</button>
									)
								}
							
								<button type="button" onClick={()=>{
									donationUsed(singleData._id);
								}}
								className="text-sky-600 hover:text-white border border-sky-700 hover:bg-sky-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-900">Used</button>
								<button type="button" onClick={()=>{
									donationUnused(singleData._id);
								}}
								className="text-orange-600 hover:text-white border border-orange-700 hover:bg-orange-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900">Unused</button>
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
export default ViewUserTransaction;