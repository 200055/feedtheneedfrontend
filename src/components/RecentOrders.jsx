import React, { useState,useEffect } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import axios from "axios";

const recentOrderData = [
	{
		id: '1',
		donation_id: '4324',
		customer_id: '23143',
		customer_name: 'Ramesh Shrestha',
		donation_date: '2022-05-17T03:24:00',
		donation_amount: 'Rs. 4,435.50',
		donation_status: 'Pending',
		customer_address: 'Maitidevi'
	},
	{
		id: '7',
		donation_id: '7453',
		customer_id: '96453',
		customer_name: 'Hari Adhikari',
		donation_date: '2022-05-14T05:24:00',
		donation_amount: 'Rs. 5,000',
		donation_status: 'CONFIRMED',
		customer_address: 'Maitidevi'
	},
	{
		id: '2',
		donation_id: '5434',
		customer_id: '65345',
		customer_name: 'Shiva Prasad Chapagain',
		donation_date: '2022-05-17T07:14:00',
		donation_amount: 'Rs. 2,836.44',
		donation_status: 'CONFIRMED',
		customer_address: 'Maitidevi'
	},
	{
		id: '3',
		donation_id: '9854',
		customer_id: '87832',
		customer_name: 'Yamaraj Singh',
		donation_date: '2022-05-16T12:40:00',
		donation_amount: 'Rs. 3,334.50',
		donation_status: 'CONFIRMED',
		customer_address: 'Maitidevi'
	},
	{
		id: '4',
		donation_id: '8763',
		customer_id: '09832',
		customer_name: 'Kabita Sharma',
		donation_date: '2022-05-14T03:24:00',
		donation_amount: 'Rs. 5,876.00',
		donation_status: 'Pending',
		customer_address: 'Maitidevi'
	},
	{
		id: '5',
		donation_id: '5627',
		customer_id: '97632',
		customer_name: 'Pujan Pudasaini',
		donation_date: '2022-05-14T05:24:00',
		donation_amount: 'Rs. 3,196.35',
		donation_status: 'CONFIRMED',
		customer_address: 'Maitidevi'
	}
]

export default function RecentOrders() {

	const [details,setDetails]= useState([]);
	useEffect(() => {
        axios.get("http://localhost:90/all_transaction")
            .then(result => {
                setDetails(result.data.data)
				console.log(result.data.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Donations</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700 text-center table-auto border-spacing-y-5">
					<thead>
						<tr>
							{/* <th>ID</th>
							<th>Donation ID</th> */}
							<th>Name</th>
							<th>Donation Date</th>
							<th>Total Donation</th>
							<th>User Address</th>
							<th>Donation Status</th>
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
								<td>
									<Link to={`/customer/Rs. {order.customer_id}`}>{donation.donor_name}</Link>
								</td>
								<td>{format(new Date(donation.created_at), 'dd MMM yyyy')}</td>
								<td>Rs.{donation.donation_amount}</td>
								<td>{donation.donor_address}</td>
								<td>{getOrderStatus(donation.donation_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
