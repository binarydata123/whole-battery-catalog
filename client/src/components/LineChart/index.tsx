import React from 'react';
import { Line } from '@ant-design/plots';

interface DemoLineProps {
	data: { Date: string; scales: number }[];
}

const LineChart: React.FC<DemoLineProps> = ({ data }) => {
	const config = {
		data,
		padding: [20, 40, 40, 50],
		xField: 'Date',
		yField: 'scales',
		xAxis: {
			// type: 'timeCat',
			tickCount: 5
		}
	};

	return <Line style={{ maxHeight: '250px' }} {...config} />;
};

export default LineChart;
