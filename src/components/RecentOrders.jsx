import React, { useState,useEffect } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import { ToastContainer, toast } from 'react-toastify'
import axios from "axios";


export default function RecentOrders() {

	const [details,setDetails]= useState([]);

	useEffect(() => {
        axios.get("http://localhost:90/all_transaction")
            .then(result => {
                setDetails(result.data.data)
            })
            .catch(e => {
                console.log(e)
            })
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
			  if (result.data.success) {
				toast.success("Donation Verification is now Received",{
			  position:"bottom-right"
			});
				setTimeout(() => window.location.replace('/dashboard'), 500)
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
		  return axios.put("http://localhost:90/staff/change_donation_status/" + transcation_id,data, config)
			.then((result) => {
			
			  if (result.data.success) {
				toast.success("Donation Verification is now Received",{
			  position:"bottom-right"
			});
				setTimeout(() => window.location.replace('/dashboard'), 500)
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
				
				  if (result.data.success) {
					toast.error("Donation Verification is now Pending",{
				  position:"bottom-right"
				});
					setTimeout(() => window.location.replace('/dashboard'), 500)
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
					
					  if (result.data.success) {
						toast.error("Donation Verification is now Pending",{
					  position:"bottom-right"
					});
						setTimeout(() => window.location.replace('/dashboard'), 500)
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
					
					  if (result.data.success) {
						toast.success("Donation Verification is now Used",{
					  position:"bottom-right"
					});
						setTimeout(() => window.location.replace('/dashboard'), 500)
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
					
					  if (result.data.success) {
						toast.success("Donation Verification is now Used",{
					  position:"bottom-right"
					});
						setTimeout(() => window.location.replace('/dashboard'), 500)
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
						
						  if (result.data.success) {
							toast.error("Donation Verification is now Unused",{
						  position:"bottom-right"
						});
							setTimeout(() => window.location.replace('/dashboard'), 500)
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
						
						  if (result.data.success) {
							toast.error("Donation Verification is now Unused",{
						  position:"bottom-right"
						});
							setTimeout(() => window.location.replace('/dashboard'), 500)
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
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Donations</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700 text-center table-auto">
					<thead>
						<tr>
							{/* <th>ID</th> */}
							<th>Name</th>
							<th>User Email</th>
							<th>Donation Date</th>
							<th>Total Donation</th>
							<th>User Address</th>
							<th>Donation Status</th>
							<th>Verify</th>
						</tr>
					</thead>
					<tbody>
						{details.map((donation) => (
							<tr>
								{/* <td>
									<Link to={`/order/Rs. {order.id}`}>#{order.id}</Link>
								</td> */}
								{/* <td>
									<Link to={`/product/Rs. {order.donation_id}`}>#{order.donation_id}</Link>
								</td> */}
								<td >
									<Link to={`/dashboard/viewuser/user_transaction/`+donation.user_id._id} className='cursor-help'>{donation.donor_name}</Link>
								</td>
								<td>
									{donation.user_id.email}
								</td>
								<td>{format(new Date(donation.created_at), 'dd MMM yyyy')}</td>
								<td>Rs.{donation.donation_amount}</td>
								<td>{donation.donor_address}</td>
								<td>{getOrderStatus(donation.donation_status)}</td>
								<td>
								
								{
									donation.donation_status === 'Pending'?
									(
										<button type="button" onClick={()=>{
											donationReceived(donation._id);
										}}
										 className="text-green-600 hover:text-white border border-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Received</button>
		
									):
									(
											
								<button type="button" onClick={()=>{
									donationPending(donation._id);
								}}
								className="text-red-600 hover:text-white border border-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Pending</button>
									)
								}
							
								<button type="button" onClick={()=>{
									donationUsed(donation._id);
								}}
								className="text-sky-600 hover:text-white border border-sky-700 hover:bg-sky-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-900">Used</button>
								<button type="button" onClick={()=>{
									donationUnused(donation._id);
								}}
								className="text-orange-600 hover:text-white border border-orange-700 hover:bg-orange-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900">Unused</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<ToastContainer/>
		</div>
		
	)
}
