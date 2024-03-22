'use client';
import React, { useState } from 'react';
import { Col, Row, Form, Input, Button, DatePicker, Modal } from 'antd';
import './style.css';
import dayjs from 'dayjs';
import Titles from '@/app/commonUl/Titles';
import ParaText from '@/app/commonUl/ParaText';

export default function BookAppointmentPopup() {
	return (
		<>
			<div className="customContainer" id="appointment">
				<Form variant="filled" style={{ maxWidth: 900 }} layout="vertical">
					<Titles level={3} color="PrimaryColor">
						Book Your Appointment
					</Titles>
					<ParaText size="medium" color="black">
						So our team can reach out to you on time
					</ParaText>
					<div className="gapMarginFourTeenTop"></div>
					<Row gutter={[16, 16]}>
						<Col xl={12} xxl={12}>
							<Form.Item
								label="Full Name"
								name="name"
								rules={[{ required: true, message: 'Please input your name!' }]}
							>
								<Input name="name" value="" />
							</Form.Item>
							<Form.Item
								label="Email"
								name="email"
								rules={[{ required: true, message: 'Please input your email!' }]}
							>
								<Input name="email" value="" />
							</Form.Item>
							<Form.Item
								label="Phone Number"
								name="phoneNumber"
								rules={[{ required: true, message: 'Please input your phone number!' }]}
							>
								<Input name="phoneNumber" value="" />
							</Form.Item>
						</Col>
						<Col xl={12} xxl={12}>
							<Form.Item
								label="Available Date"
								name="availableDate"
								rules={[{ required: true, message: 'Please select an available date!' }]}
							>
								<DatePicker name="availableDate" id="availableDate" />
							</Form.Item>
							<Form.Item
								label="Share Your Message"
								name="message"
								rules={[{ required: true, message: 'Please share your message!' }]}
							>
								<Input.TextArea name="message" value="" />
							</Form.Item>
							<div className="textEnd">
								<Form.Item>
									<Button type="primary" htmlType="submit" style={{ height: '45px' }}>
										Book Now
									</Button>
								</Form.Item>
							</div>
						</Col>
					</Row>
				</Form>
			</div>
		</>
	);
}
