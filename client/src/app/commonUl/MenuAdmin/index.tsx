'use client';
import './style.css';
import React, { useContext } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHome } from 'react-icons/io5';
import { SiAuthy, SiBloglovin } from 'react-icons/si';
import { FaAppStore } from 'react-icons/fa';
import Titles from '../Titles';
import { MdOutlinePayment } from 'react-icons/md';
import { FaFilePdf } from 'react-icons/fa6';
import { MdContacts } from 'react-icons/md';
import { RiLockPasswordFill, RiUser2Fill } from 'react-icons/ri';
import { FcNews } from 'react-icons/fc';
import AuthContext from '@/contexts/AuthContext';

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
		<Link href="/en/admin/dashboard">
			{' '}
			<IoHome />
		</Link>
	),
	getItem(
		'Generate Report',
		'2',
		<Link href="#" className="">
			<FaAppStore className="menuIcon" />
		</Link>,
		[
			getItem(
				'Report Single ',
				'3',
				<Link href="/en/admin/report-single">
					{' '}
					<SiBloglovin />
				</Link>
			),

			getItem(
				'Generate PDF',
				'4',
				<Link href="/en/admin/generatePDF">
					{' '}
					<FaFilePdf />
				</Link>
			)
		]
	),

	getItem(
		'Payment History',
		'5',
		<Link href="/en/admin/payment-history">
			{' '}
			<MdOutlinePayment />
		</Link>,
		[
			getItem(
				'Single Invoice ',
				'6',
				<Link href="/en/admin/single-invoice ">
					{' '}
					<SiBloglovin />
				</Link>
			)
		]
	),
	getItem(
		'Invoice',
		'7',
		<Link href="/en/admin/invoice">
			{' '}
			<MdContacts />
		</Link>
	),
	getItem(
		'Blogs',
		'8',
		<Link href="/en/admin/blogs">
			{' '}
			<FcNews />
		</Link>
	),
	getItem(
		'Author',
		'9',
		<Link href="/en/admin/author">
			{' '}
			<RiUser2Fill />
		</Link>
	),
	getItem(
		'Contact Form History',
		'10',
		<Link href="/en/admin/contact-form-history">
			{' '}
			<MdContacts />
		</Link>
	),
	getItem(
		'General Settings',
		'11',
		<Link href="/en/admin/general-settings">
			{' '}
			<MdContacts />
		</Link>
	),
	getItem(
		'Change Password',
		'12',
		<Link href="/en/admin/change-password">
			{' '}
			<RiLockPasswordFill />
		</Link>
	),
	getItem(
		'Log Out',
		'13',
		<Link href="/en/admin/log-out">
			{' '}
			<SiAuthy />
		</Link>
	)
];

export default function MenuAdmin() {
	const pathname = usePathname();

	const { logout } = useContext(AuthContext);

	function handleClick(href: any) {
		if (href.key == 13) {
			logout();
		}
	}

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
								<Titles color="white" className="textUppercase" level={5}>
									whole battery catalog
								</Titles>
							</Link>
						</div>
						<div className="gapMarginFourTeenTop"></div>
						<Menu
							defaultSelectedKeys={[defaultSelectedKey]}
							defaultOpenKeys={['sub1']}
							mode="inline"
							theme="dark"
							items={items}
							onClick={handleClick}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
