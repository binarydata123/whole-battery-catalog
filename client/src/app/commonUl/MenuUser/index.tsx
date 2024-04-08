'use client';
import './style.css';
import React from 'react';
import type { MenuProps } from 'antd';
import { Menu, Image } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHome } from 'react-icons/io5';
import { SiBloglovin } from 'react-icons/si';
import { FaAppStore } from 'react-icons/fa';
import Titles from '../Titles';
import { MdOutlinePayment } from 'react-icons/md';
import { FaFilePdf } from 'react-icons/fa6';
import { MdContacts } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { CgBattery } from 'react-icons/cg';
import VendorAuth from '@/contexts/VendorAuthProvider';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group'
): MenuItem {
	return {
		key,
		icon,
		label,
		type,
		children
	} as MenuItem;
}
const items: MenuItem[] = [
	getItem(
		'Dashboard',
		'1',
		<Link href="/en/user/dashboard">
			{' '}
			<IoHome />
		</Link>
	),
	getItem(
		'Generate Report',
		'2',
		<Link href="/en/user/generate-report" className="">
			<FaAppStore className="menuIcon" />
		</Link>
	),
	getItem(
		'Payment History',
		'3',
		<Link href="/en/admin/payment-history">
			{' '}
			<MdOutlinePayment />
		</Link>,
		[
			getItem(
				'Single Invoice ',
				'4',
				<Link href="/en/user/single-invoice ">
					{' '}
					<SiBloglovin />
				</Link>
			)
		]
	),
	getItem(
		'Change Password',
		'5',
		<Link href="/en/user/change-password">
			{' '}
			<RiLockPasswordFill />
		</Link>
	),
	getItem(
		'Logout',
		'6',
		<Link href="#" onClick={(e) => e.preventDefault()}>
			{' '}
			<RiLockPasswordFill />
		</Link>
	)
];

export default function MenuAdmin() {
	const { user, logout } = React.useContext(VendorAuth);

	const pathname = usePathname();
	let defaultSelectedKey;
	switch (pathname) {
		case '/admin/dashboard':
			defaultSelectedKey = '1';
			break;
		case '/admin/mechanic-dashboard':
			defaultSelectedKey = '2';
			break;
		case '/admin/car-listing':
			defaultSelectedKey = '3';
			break;
		case '/admin/finished-auction':
			defaultSelectedKey = '4';
			break;
		case '/admin/mechanic-requests':
			defaultSelectedKey = '5';
			break;
		case '/admin/users':
			defaultSelectedKey = '6';
			break;
		case '/admin/customize/car-mechanic-report':
			defaultSelectedKey = '7';
			break;
		case '/admin/blogs':
			defaultSelectedKey = '8';
			break;
		case '/admin/admin-inquiries':
			defaultSelectedKey = '9';
			break;
		default:
			defaultSelectedKey = '1';
	}

	return (
		<>
			<div id="menuId">
				<div className="dddd">
					<div className="menuDash darkMenuDash" id="menuDash">
						<div className="textCenter">
							<Link href="/">
								<Image src="/images/logo-site.png" alt="" preview={false} width={190} />
							</Link>
						</div>
						<div className="gapMarginFourTeenTop"></div>
						<Menu
							defaultSelectedKeys={[defaultSelectedKey]}
							defaultOpenKeys={['sub1']}
							mode="inline"
							theme="dark"
							items={items}
							onClick={({ key }) => {
								if (key === '6') {
									logout();
								}
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
