'use client';
import './style.css';
import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Image } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHome } from 'react-icons/io5';
import { SiBloglovin } from 'react-icons/si';
import { MdContacts, MdOutlinePayment } from 'react-icons/md';
import { RiLockPasswordFill, RiUser2Fill } from 'react-icons/ri';
// import VendorAuth from '@/contexts/VendorAuthProvider';

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
		'Battery Reports',
		'/en/admin/battery-reports',
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
				'/en/admin/invoice',
				<Link href="/en/admin/invoice">
					<MdContacts />
				</Link>
			),
			getItem(
				'Single Invoice ',
				'5',
				<Link href="#">
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
	,
	getItem(
		'Change Password',
		'/en/admin/change-password',
		<Link href="/en/admin/change-password">
			<RiLockPasswordFill />
		</Link>
	),
	getItem(
		'General Settings',
		'/en/admin/general-settings',
		<Link href="/en/admin/general-settings">
			<MdContacts />
		</Link>
	)
];

export default function MenuAdminMobile() {
	const pathName = usePathname();
	const [selectedKey, setSelectedKey] = useState(pathName || '/en/admin/dashboard');

	const handleMenuClick = (e: any) => {
		setSelectedKey(e.key);
	};

	useEffect(() => {
		setSelectedKey(pathName);
	}, [pathName]);

	return (
		<>
			<div id="mobileId">
				<div className="dddd">
					<div className="menuDashMoble darkMenuDashMoble" id="menuDashMoble">
						<div className="textCenter">
							<Link href="/">
								<Image src="/images/logo-site.png" alt="" preview={false} width={190} />
							</Link>
						</div>
						<div className="gapMarginTop"></div>
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
