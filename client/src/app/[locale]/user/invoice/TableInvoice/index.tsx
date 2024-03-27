import React from 'react';
import { Avatar, Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FaRegUserCircle } from 'react-icons/fa';
const { Column } = Table;
interface DataType {
	key: any;
	name: any;
	Weight: number;
	Assigned: any;
	Status: any;
	contact: any;
	location: any;
	Gender: any;
}

export default function TableInvoice() {
	const data: DataType[] = [
		{
			key: '1',
			name: (
				<div>
					<Avatar size={40} icon={<FaRegUserCircle />} />
					<span style={{ marginLeft: '10px' }}>John S. Elliott</span>
				</div>
			),
			Gender: 'Male',
			Weight: 32,
			Assigned: 'New York No. 1 Lake Park',
			contact: '9999999999',
			location: 'Mohali',

			Status: (
				<>
					<Space size="middle">
						{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
						<Button icon={<HiOutlineDotsVertical />}></Button>
					</Space>
				</>
			)
		},
		{
			key: '2',
			name: (
				<div>
					<Avatar size={40} icon={<FaRegUserCircle />} />
					<span style={{ marginLeft: '10px' }}>Darlene R. Young</span>
				</div>
			),
			Gender: 'Male',
			Weight: 32,
			Assigned: 'New York No. 1 Lake Park',
			contact: '9999999999',
			location: 'Mohali',

			Status: (
				<>
					<Space size="middle">
						{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
						<Button icon={<HiOutlineDotsVertical />}></Button>
					</Space>
				</>
			)
		},
		{
			key: '3',
			name: (
				<div>
					<Avatar size={40} icon={<FaRegUserCircle />} />
					<span style={{ marginLeft: '10px' }}>Darlene R. Young</span>
				</div>
			),
			Gender: 'Male',
			Weight: 32,
			Assigned: 'New York No. 1 Lake Park',
			contact: '9999999999',
			location: 'Mohali',

			Status: (
				<>
					<Space size="middle">
						{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
						<Button icon={<HiOutlineDotsVertical />}></Button>
					</Space>
				</>
			)
		},
		{
			key: '4',
			name: (
				<div>
					<Avatar size={40} icon={<FaRegUserCircle />} />
					<span style={{ marginLeft: '10px' }}>Darlene R. Young</span>
				</div>
			),
			Gender: 'Male',
			Weight: 32,
			Assigned: 'New York No. 1 Lake Park',
			contact: '9999999999',
			location: 'Mohali',

			Status: (
				<>
					<Space size="middle">
						{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
						<Button icon={<HiOutlineDotsVertical />}></Button>
					</Space>
				</>
			)
		},
		{
			key: '5',
			name: (
				<div>
					<Avatar size={40} icon={<FaRegUserCircle />} />
					<span style={{ marginLeft: '10px' }}>Darlene R. Young</span>
				</div>
			),
			Gender: 'Male',
			Weight: 32,
			Assigned: 'New York No. 1 Lake Park',
			contact: '9999999999',
			location: 'Mohali',

			Status: (
				<>
					<Space size="middle">
						{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
						<Button icon={<HiOutlineDotsVertical />}></Button>
					</Space>
				</>
			)
		},
		{
			key: '6',
			name: (
				<div>
					<Avatar size={40} icon={<FaRegUserCircle />} />
					<span style={{ marginLeft: '10px' }}>Darlene R. Young</span>
				</div>
			),
			Gender: 'Male',
			Weight: 32,
			Assigned: 'New York No. 1 Lake Park',
			contact: '9999999999',
			location: 'Mohali',

			Status: (
				<>
					<Space size="middle">
						{/* <Button onClick={showDeleteModal} icon={<MdDelete />}></Button> */}
						<Button icon={<HiOutlineDotsVertical />}></Button>
					</Space>
				</>
			)
		}
	];

	return (
		<div>
			<Table dataSource={data} className="table-container">
				<Column title="Product Name" dataIndex="name" key="name" />
				<Column title="Product SKU" dataIndex="Gender" key="Gender" />
				<Column title="Created at" dataIndex="Weight" key="Weight" />
				<Column title="Status" dataIndex="Assigned" key="Assigned" />
				<Column title="Price" dataIndex="contact" key="contact" />
				<Column title="Location" dataIndex="location" key="location" />
				<Column title="Action" dataIndex="Status" key="Status" />
			</Table>
		</div>
	);
}
