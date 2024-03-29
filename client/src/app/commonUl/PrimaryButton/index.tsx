import React from 'react';
import './style.css';
import { Button } from 'antd';
interface PrimaryButtonProps {
	label?: string;
	className?: string;
	children?: React.ReactNode;
	showIcon?: boolean;
	color?: string;
	background?: string;
	height?: number;
	fontSize?: number;
	borderRedius?: any;
	onClick?: () => void;
}
export default function PrimaryButton({ label, className = '', children, color, onClick }: PrimaryButtonProps) {
	return (
		<>
			<div className="primary-btn-wrapper">
				<Button
					type="primary"
					onClick={onClick}
					style={{
						color: `${color}`
					}}
					className={`btn-primary ${className}`}
				>
					{label || children}
				</Button>
			</div>
		</>
	);
}
