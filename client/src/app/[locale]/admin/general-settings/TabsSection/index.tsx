import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import General from '../General';
import Invoicing from '../Invoicing';
import Account from '../Account';
const onChange = (key: string) => {
	console.log(key);
};

export default function TabsSection() {
	const items: TabsProps['items'] = [
		{
			key: '1',
			label: 'General',
			children: <General />
		},
		{
			key: '2',
			label: 'Invoicing',
			children: <Invoicing />
		},
		{
			key: '3',
			label: 'Accounting',
			children: <Account />
		}
	];
	return (
		<>
			<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
		</>
	);
}
