import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import axios from 'axios'

export default function TransactionChart() {
  const [details, setDetails] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
	axios.get("http://localhost:90/all_transaction")
	.then(result => {
	const data = [
	{ name: "Jan", Used: 0, Unused: 0 },
	{ name: "Feb", Used: 0, Unused: 0 },
	{ name: "Mar", Used: 0, Unused: 0 },
	{ name: "Apr", Used: 0, Unused: 0 },
	{ name: "May", Used: 0, Unused: 0 },
	{ name: "Jun", Used: 0, Unused: 0 },
	{ name: "Jul", Used: 0, Unused: 0 },
	{ name: "Aug", Used: 0, Unused: 0 },
	{ name: "Sep", Used: 0, Unused: 0 },
	{ name: "Oct", Used: 0, Unused: 0 },
	{ name: "Nov", Used: 0, Unused: 0 },
	{ name: "Dec", Used: 0, Unused: 0 },
	]
	result.data.data.forEach(item => {
		let date = new Date(item.created_at).getMonth()
		if (item.donation_status === "Used") {
		  data[date].Used += item.donation_amount
		} else {
		  data[date].Unused += item.donation_amount
		}
	  })
	
	  setDetails(data)
	})
	.catch(error => {
	  setError(error.message)
      })
  }, [])
  return (
	<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
	  <strong className="text-gray-700 font-medium">Transactions</strong>
	  <div className="mt-3 w-full flex-1 text-xs">
		<ResponsiveContainer width="100%" height="100%">
		  <BarChart
			width={500}
			height={300}
			data={details}
			margin={{
			  top: 20,
			  right: 10,
			  left: -10,
			  bottom: 0
			}}
		  >
			<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="Unused" fill="#ea580c" />
			<Bar dataKey="Used" fill="#0ea5e9" />
		  </BarChart>
		</ResponsiveContainer>
	  </div>
	</div>
  )
  
}
  