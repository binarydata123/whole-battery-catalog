'use client';
import ResetPasswordForm from './reset-password-form';
import { Form, Input, Button, message, Row, Col, Flex, Rate } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { createNewPassword } from '@/lib/ApiAdapter';
import { useRouter, useSearchParams } from 'next/navigation';
import ErrorHandler from '@/lib/ErrorHandler';
import Link from 'next/link';
import ParaText from '@/app/commonUl/ParaText';
import { VscArrowCircleLeft, VscArrowCircleRight } from 'react-icons/vsc';

export default function ResetPassword() {
	const [form] = Form.useForm();
	const searchParams = useSearchParams();
	const userID = searchParams.get('userId');
	const token = searchParams.get('token');
	const router = useRouter();
	const [value, setValue] = useState<number>(0);
	const [loading, setLoading] = useState(false);
	const newPassword = async (values: any) => {
		try {
			setLoading(true);
			const updatedValues = { ...values, userId: userID, token: token };
			const res = await createNewPassword(updatedValues);
			if (res) {
				setLoading(false);
				message.success('New password has been set successfully');
				router.push(`${process.env['NEXT_PUBLIC_SITE_URL']}/login`);
			}
		} catch (error) {
			setLoading(false);
			ErrorHandler.showNotification(error);
		}
	};

	return (
		<>
			<Row>
				<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
					<ResetPasswordForm />
				</Col>
				<Col>
					<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
						<div className="fullImageLogin">
							<div className="bottomSection">
								<ParaText size="extraSmall" color="white">
									“Crema is purely based on Material ui components and follows Material ui
									guidelines.”
								</ParaText>
								<Row align="middle" gutter={[16, 16]}>
									<Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
										<ParaText size="large" color="white" className="dBlock">
											Jake Paul
										</ParaText>
										<ParaText size="textGraf" color="white" className="dBlock">
											CEO, Company
										</ParaText>
										<ParaText size="smallExtra" color="white" className="dBlock">
											Finance Agency
										</ParaText>
									</Col>
									<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="textEnd">
										<Flex gap="middle" vertical>
											<Rate onChange={setValue} value={value} />
										</Flex>
										<div className="gapMarginTopOne"></div>
										<VscArrowCircleLeft
											style={{ color: '#fff', fontSize: '30px', cursor: 'pointer' }}
										/>
										<VscArrowCircleRight
											style={{ color: '#fff', fontSize: '30px', cursor: 'pointer' }}
										/>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
				</Col>
			</Row>
		</>
	);
}
