import {
	HiOutlineViewGrid,
	HiUser,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineMap,
	HiOutlineQuestionMarkCircle,
	HiBadgeCheck,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{	
		key: 'addstaff',
		label: 'Add Staff',
		path: '/dashboard/viewstaff',
		icon: <HiOutlineUsers />
	},
	{
		key: 'blog',
		label: 'Blog',
		path: '/dashboard/blog',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'partner',
		label: 'Partner',
		path: '/dashboard/partner',
		icon: <HiBadgeCheck />
	},
	{
		key: 'contact',
		label: 'Contact',
		path: '/dashboard/contact',
		icon: <HiOutlineAnnotation />
	},
	
	{
		key: 'map',
		label: 'Map',
		path: '/dashboard/map',
		icon: <HiOutlineMap />
	},
	// {
	// 	key: 'transactions',
	// 	label: 'Transactions',
	// 	path: '/transactions',
	// 	icon: <HiOutlineDocumentText />
	// },
	// {
	// 	key: 'messages',
	// 	label: 'Messages',
	// 	path: '/messages',
	// 	icon: <HiOutlineAnnotation />
	// }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'changePassword',
		label: 'Change Password',
		path: '/dashboard/changepassword',
		icon: <HiOutlineCog />
	},
	// {
	// 	key: 'support',
	// 	label: 'Help & Support',
	// 	path: '/support',
	// 	icon: <HiOutlineQuestionMarkCircle />
	// }
]
