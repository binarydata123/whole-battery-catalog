'use client';
import './style.css';
import React, { useContext, useState, useEffect } from 'react';
import { MenuProps, Image } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useParams } from 'next/navigation';
import { IoHome } from 'react-icons/io5';
import { SiAuthy, SiBloglovin } from 'react-icons/si';
import { FaAppStore } from 'react-icons/fa';
import Titles from '../Titles';
import { MdOutlinePayment } from 'react-icons/md';
import { FaFilePdf } from 'react-icons/fa6';
import { MdContacts } from 'react-icons/md';
import { RiLockPasswordFill, RiUser2Fill } from 'react-icons/ri';
import { FcNews } from 'react-icons/fc';
// import AuthContext from '@/contexts/AuthContext';
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
		'/en/admin/dashboard',
		<Link href="/en/admin/dashboard">
			<IoHome />
		</Link>
	),
	getItem(
		'Battery Reports ',
		'/en/admin/battery-reports',
		<Link href="/en/admin/battery-reports">
			<SiBloglovin />
		</Link>
	),

	getItem(
		'Payment History',
		'1',
		<Link href="#">
			<MdOutlinePayment />
		</Link>,
		[
			getItem(
				'Invoice',
				'/en/admin/invoice',
				<Link href="/en/admin/invoice">
					<MdContacts />
				</Link>
			),
			getItem(
				'Single Invoice ',
				'2',
				<Link href="# ">
					<SiBloglovin />
				</Link>
			)
		]
	),
	getItem(
		'Vendors',
		'/en/admin/vendors',
		<Link href="/en/admin/vendors">
			{' '}
			<RiUser2Fill />
		</Link>
	),
	getItem(
		'Blogs',
		'/en/admin/blogs',
		<Link href="/en/admin/blogs">
			{' '}
			<FcNews />
		</Link>
	),
	getItem(
		'Author',
		'/en/admin/author',
		<Link href="/en/admin/author">
			{' '}
			<RiUser2Fill />
		</Link>
	),
	getItem(
		'General Settings',
		'/en/admin/general-settings',
		<Link href="/en/admin/general-settings">
			{' '}
			<MdContacts />
		</Link>
	),
	getItem(
		'Change Password',
		'/en/admin/change-password',
		<Link href="/en/admin/change-password">
			{' '}
			<RiLockPasswordFill />
		</Link>
	),
	getItem(
		'Log Out',
		'11',
		<Link href="#">
			{' '}
			<SiAuthy />
		</Link>
	)
];

export default function MenuAdmin() {
	const pathName = usePathname();
	const [selectedKey, setSelectedKey] = useState(pathName || '/en/admin/dashboard');

	const { logout } = useContext(VendorAuth);

	function handleClick(e: any) {
		if (e.key === '11') {
			logout();
		} else if (e.key !== '1' && e.key !== '2') {
			console.log(e);
			setSelectedKey(e.key);
		}
	}

	useEffect(() => {
		setSelectedKey(pathName);
	}, [pathName]);

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
							selectedKeys={[selectedKey]}
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
