import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';

interface SpinLoaderProps {
	children: React.ReactNode;
	loading: boolean;
}

const SpinLoader: React.FC<SpinLoaderProps> = ({ loading, children }) => {
	return (
		<Spin spinning={loading} delay={500} indicator={<LoadingOutlined style={{ fontSize: 24 }} />}>
			{children}
		</Spin>
	);
};

export default SpinLoader;
