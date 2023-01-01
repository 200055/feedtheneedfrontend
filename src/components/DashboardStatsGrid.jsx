import React, { useState, useEffect } from 'react';
import { IoRibbonOutline, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';

export default function DashboardStatsGrid () {
  const [totalDonation, setTotalDonation] = useState(0);
  const [thisMonthDonation, setThisMonthDonation] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from /leaderboard endpoint
    fetch('http://localhost:90/leaderboard')
      .then((response) => response.json())
      .then((data) => {
        setTotalUsers(data.data.length);
        setUsers(data.data);
      });

    // Fetch data from /all_transaction endpoint
    fetch('http://localhost:90/all_transaction')
      .then((response) => response.json())
      .then((data) => {
        setAllTransactions(data.data);
        let total = 0;
        let thisMonth = 0;
        const currentMonth = new Date().getMonth();
        data.data.forEach((transaction) => {
          total += transaction.donation_amount;
          const transactionMonth = new Date(transaction.created_at).getMonth();
          if (transactionMonth === currentMonth) {
            thisMonth += transaction.donation_amount;
          }
        });
        setTotalDonation(total);
        setThisMonthDonation(thisMonth);
      });
  }, []);

  return (
	<div className="flex gap-4">
		<BoxWrapper>
			<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
				<IoRibbonOutline className="text-2xl text-white" />
			</div>
			<div className="pl-4">
				<span className="text-sm text-gray-500 font-light">Total Donation</span>
				<div className="flex items-center">
					<strong className="text-xl text-gray-700 font-semibold">
						Rs. {totalDonation}
					</strong>
				</div>
			</div>
		</BoxWrapper>
		<BoxWrapper>
			<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
				<IoPieChart className="text-2xl text-white" />
			</div>
			<div className="pl-4">
				<span className="text-sm text-gray-500 font-light">This Month Donation</span>
				<div className="flex items-center">
					<strong className="text-xl text-gray-700 font-semibold">
						Rs. {thisMonthDonation}
					</strong>
				</div>
			</div>
		</BoxWrapper>
		<BoxWrapper>
			<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
				<IoPeople className="text-2xl text-white" />
			</div>
			<div className="pl-4">
				<span className="text-sm text-gray-500 font-light">Total Users</span>
				<div className="flex items-center">
					<strong className="text-xl text-gray-700 font-semibold">{totalUsers}</strong>
				</div>
			</div>
		</BoxWrapper>
	</div>
)
}
  function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}