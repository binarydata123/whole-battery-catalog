'use client';
import './style.css';
import React, { useEffect, useState } from 'react';
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
			<IoHome />
		</Link>
	),
	getItem(
		'Generate Report',
		'2',
		<Link href="/en/user/generate-report">
			<FaAppStore className="menuIcon" />
		</Link>
	),
	getItem(
		'Payment History',
		'3',
		<Link href="/en/user/payment-history">
			<MdOutlinePayment />
		</Link>,
		[
			getItem(
				'Single Invoice ',
				'4',
				<Link href="/en/user/single-invoice ">
					<SiBloglovin />
				</Link>
			)
		]
	),
	getItem(
		'Change Password',
		'5',
		<Link href="#">
			<RiLockPasswordFill />
		</Link>
	),
	getItem(
		'Logout',
		'6',
		<Link href="#" onClick={(e) => e.preventDefault()}>
			<RiLockPasswordFill />
		</Link>
	)
];

export default function MenuUser() {
	const [selectedKey, setSelectedKey] = useState(() => {
		// return localStorage.getItem('SelectedMenuKey' || '1');
		return typeof window !== 'undefined' ? localStorage.getItem('SelectedMenuKey') : '1';
	});

	const { user, logout } = React.useContext(VendorAuth);

	const handleMenuClick = (e: any) => {
		if (e.key === '6') {
			localStorage.removeItem('SelectedMenuKey');
			logout();
		}
		setSelectedKey(e.key);
	};

	useEffect(() => {
		localStorage.setItem('SelectedMenuKey', selectedKey);
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
							onClick={handleMenuClick}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
