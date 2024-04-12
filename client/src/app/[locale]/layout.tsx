import React from 'react';
import './custom.css';
import './globals.css';
import { VendorAuthProvider } from '@/contexts/VendorAuthProvider';
import AntdConfig from '@/lib/AntdConfig';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Providers from '@/components/Providers';

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html>
			<body>
				<AntdRegistry>
					<VendorAuthProvider>
						<AntdConfig>
							<Providers>{children}</Providers>
						</AntdConfig>
					</VendorAuthProvider>
				</AntdRegistry>
			</body>
		</html>
	);
};

export default RootLayout;
