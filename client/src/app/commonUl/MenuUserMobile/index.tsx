'use client';
import './style.css';
import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Image } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHome } from 'react-icons/io5';
import { SiBloglovin } from 'react-icons/si';
import { FaFilePdf } from 'react-icons/fa';
import { FaAppStore } from 'react-icons/fa';
import Titles from '../Titles';
import { MdContacts, MdOutlinePayment } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

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
		</Link>
	)
];

export default function MenuUserMobile() {
	const [selectedKey, setSelectedKey] = useState(() => {
		return typeof window !== 'undefined' ? localStorage.getItem('UserMobileMenuKey') : '1';
	});

	const handleMenuKey = (e: any) => {
		setSelectedKey(e.key);
	};

	useEffect(() => {
		localStorage.setItem('UserMobileMenuKey', selectedKey);
	}, [selectedKey]);

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
							onClick={handleMenuKey}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
