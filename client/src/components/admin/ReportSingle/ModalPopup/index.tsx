import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import UploadPicture from '../UploadPicture';

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!'
	},
	number: {
		range: '${label} must be between ${min} and ${max}'
	}
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
	console.log(values);
};

export default function ModalPopup() {
	return (
		<>
			<Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} layout="vertical">
				<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
					<Input style={{ height: '40px' }} />
				</Form.Item>
				<Form.Item name={['phone', 'phone']} label="Phone" rules={[{ type: 'email' }]}>
					<Input style={{ height: '40px' }} />
				</Form.Item>
				<Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
					<Input style={{ height: '40px' }} />
				</Form.Item>
				<Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
					<InputNumber style={{ height: '40px' }} />
				</Form.Item>
				<Form.Item name={['user', 'website']} label="Website">
					<Input style={{ height: '40px' }} />
				</Form.Item>
				<Form.Item name={['user', 'introduction']} label="Introduction">
					<Input.TextArea />
				</Form.Item>
				<Form.Item name={['user', 'introduction']} label="Introduction">
					<UploadPicture />
				</Form.Item>
				<Form.Item>
					<div className="textEnd">
						<Button type="primary" htmlType="submit" style={{ height: '40px' }}>
							Submit
						</Button>
					</div>
				</Form.Item>
			</Form>
		</>
	);
}
