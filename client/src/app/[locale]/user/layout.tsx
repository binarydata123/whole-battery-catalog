'use client';

import React from 'react';
import { Col, Row } from 'antd';
import { usePathname } from 'next/navigation';
import MenuAdmin from '@/app/commonUl/MenuAdmin';
import HeaderDashTop from '@/app/commonUl/HeaderDashTop';
import MenuUser from '@/app/commonUl/MenuUser';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		<section>
			<Row className="myRow">
				<Col sm={24} xs={24} md={24} lg={24} xl={4} xxl={4} className="mobileNone">
					<MenuUser />
				</Col>
				<Col xs={24} sm={24} md={24} lg={24} xl={20} xxl={20}>
					<div>
						<HeaderDashTop />
					</div>
					<>
						<div
							className=""
							style={{
								background: '#F4F7FE',
								borderRadius: '6px',
								padding: '20px'
							}}
						>
							{children}
						</div>
					</>
				</Col>
			</Row>
		</section>
	);
}
