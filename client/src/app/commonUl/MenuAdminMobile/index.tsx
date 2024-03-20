'use client';
import './style.css';
import React, { useContext } from 'react';
import type { MenuProps } from 'antd';
import { Image, Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHome } from 'react-icons/io5';
import { SiBloglovin } from 'react-icons/si';
import ParaText from '../ParaText';
import { SiAuthy } from 'react-icons/si';
import { FaBell } from 'react-icons/fa';
import { FaAppStore } from 'react-icons/fa';
import { SlEnvolopeLetter } from 'react-icons/sl';
import Titles from '../Titles';
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
		'Appoinments',
		'2',
		<Link href="/en/admin/appoinment">
			{' '}
			<FaAppStore />
		</Link>
	),
	getItem(
		'Contact Forms',
		'3',
		<Link href="/en/admin/contact-form">
			<SlEnvolopeLetter />
		</Link>
	),
	getItem(
		'Blogs',
		'4',
		<Link href="/en/admin/blogs">
			{' '}
			<SiBloglovin />
		</Link>
	),
	getItem(
		'author',
		'5',
		<Link href="/en/admin/author">
			{' '}
			<SiAuthy />
		</Link>
	)
];

export default function MenuAdminMobile() {
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
			<div id="mobileId">
				<div className="dddd">
					<div className="menuDashMoble darkMenuDashMoble" id="menuDashMoble">
						<div className="textCenter">
							<Link href="/">
								<Titles color="black" className="textUppercase" level={5}>
									whole battery catalog
								</Titles>
							</Link>
						</div>
						<div className="gapMarginTop"></div>
						<Menu
							defaultSelectedKeys={[defaultSelectedKey]}
							defaultOpenKeys={['sub1']}
							mode="inline"
							theme="dark"
							items={items}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
