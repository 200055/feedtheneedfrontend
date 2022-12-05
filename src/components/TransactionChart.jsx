import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Donated: 4000,
		Donation_received: 2400
	},
	{
		name: 'Feb',
		Donated: 3000,
		Donation_received: 1398
	},
	{
		name: 'Mar',
		Donated: 2000,
		Donation_received: 9800
	},
	{
		name: 'Apr',
		Donated: 2780,
		Donation_received: 3908
	},
	{
		name: 'May',
		Donated: 1890,
		Donation_received: 4800
	},
	{
		name: 'Jun',
		Donated: 2390,
		Donation_received: 3800
	},
	{
		name: 'July',
		Donated: 3490,
		Donation_received: 4300
	},
	{
		name: 'Aug',
		Donated: 2000,
		Donation_received: 9800
	},
	{
		name: 'Sep',
		Donated: 2780,
		Donation_received: 3908
	},
	{
		name: 'Oct',
		Donated: 1890,
		Donation_received: 4800
	},
	{
		name: 'Nov',
		Donated: 2390,
		Donation_received: 3800
	},
	{
		name: 'Dec',
		Donated: 3490,
		Donation_received: 4300
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Transactions</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
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
						<Bar dataKey="Donation_received" fill="#0ea5e9" />
						<Bar dataKey="Donated" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
