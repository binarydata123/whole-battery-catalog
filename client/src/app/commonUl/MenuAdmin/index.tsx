'use client';
import './style.css';
import React, { useContext, useState, useEffect } from 'react';
import { MenuProps, Image } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
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
		'1',
		<Link href="/en/admin/dashboard">
			<IoHome />
		</Link>
	),
	getItem(
		'Battery Reports ',
		'2',
		<Link href="/en/admin/battery-reports">
			<SiBloglovin />
		</Link>
	),

	getItem(
		'Payment History',
		'3',
		<Link href="#">
			<MdOutlinePayment />
		</Link>,
		[
			getItem(
				'Invoice',
				'5',
				<Link href="/en/admin/invoice">
					<MdContacts />
				</Link>
			),
			getItem(
				'Single Invoice ',
				'4',
				<Link href="# ">
					<SiBloglovin />
				</Link>
			)
		]
	),
	getItem(
		'Vendors',
		'8',
		<Link href="/en/admin/vendors">
			{' '}
			<RiUser2Fill />
		</Link>
	),
	getItem(
		'Blogs',
		'6',
		<Link href="/en/admin/blogs">
			{' '}
			<FcNews />
		</Link>
	),
	getItem(
		'Author',
		'7',
		<Link href="/en/admin/author">
			{' '}
			<RiUser2Fill />
		</Link>
	),
	getItem(
		'General Settings',
		'9',
		<Link href="/en/admin/general-settings">
			{' '}
			<MdContacts />
		</Link>
	),
	getItem(
		'Change Password',
		'10',
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
	const [selectedKey, setSelectedKey] = useState(() => {
		return typeof window !== 'undefined' ? localStorage.getItem('MenuAdminKey') : '1';
	});

	// if (typeof window !== 'undefined') {
	// 	setSelectedKey(() => {
	// 		return localStorage.getItem('MenuAdminKey') || '1';
	// 	});
	// }

	const { logout } = useContext(VendorAuth);

	function handleClick(e: any) {
		if (e.key === '11') {
			logout();
		}

		setSelectedKey(e.key);
	}

	// useEffect(() => {
	// 	setSelectedKey(() => {
	// 		return localStorage.getItem('MenuAdminKey') || '1';
	// 	});
	// }, []);

	useEffect(() => {
		localStorage.setItem('MenuAdminKey', selectedKey);
	}, [selectedKey]);

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
