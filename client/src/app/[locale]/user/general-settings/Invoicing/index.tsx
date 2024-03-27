import React from 'react';
import { Button, Col, DatePicker, Divider, Form, Input, Row } from 'antd';
import ParaText from '@/app/commonUl/ParaText';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { DatePickerProps } from 'antd';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const customFormat: DatePickerProps['format'] = (value) => `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat: DatePickerProps['format'] = (value) =>
	`${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value).endOf('week').format(weekFormat)}`;
export default function Invoicing() {
	return (
		<div>
			<Row align="middle">
				<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
					<ParaText size="medium" color="black" fontWeightBold={600}>
						Invoicing Setting
					</ParaText>
					<ParaText size="extraSmall" color="black" className="dBlock">
						Manage Your General Account Setting
					</ParaText>
				</Col>
				<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="textEnd">
					<Button type="primary">Edit</Button>
				</Col>
			</Row>

			<Divider />
			<Row align="middle" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						General info
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Language"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Default Currency"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Date Format"
							name="username"
							rules={[{ required: true, message: 'Please input your Date Format!' }]}
						>
							<DatePicker
								style={{ width: '100%' }}
								defaultValue={dayjs('2015/01/01', dateFormat)}
								format={dateFormat}
							/>
						</Form.Item>
						<Form.Item
							label="Decimal Separator"
							name="username"
							rules={[{ required: true, message: 'Please input your Decimal Separator!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
			</Row>
			<Divider />
			<Row align="middle" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						Invoice Recipient
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Invocing Requirment"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
			</Row>
			<Divider />
			<Row align="middle" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						Additional Text
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Introduction Text"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
			</Row>
			<Divider />
			<Row align="middle" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						Tax Rates
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Tax Type"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
						<Form layout="vertical">
							<Form.Item
								label="Concluding Text"
								name="username"
								rules={[{ required: true, message: 'Please input your username!' }]}
							>
								<Input />
							</Form.Item>
						</Form>
					</Form>
				</Col>
			</Row>
			<Divider />
			<Row align="middle" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
					<ParaText size="extraSmall" color="black" className="dBlock" fontWeightBold={600}>
						Payment Deadline
					</ParaText>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
					<Form layout="vertical">
						<Form.Item
							label="Payment Deadline"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input />
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</div>
	);
}
