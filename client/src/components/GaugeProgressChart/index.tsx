import React from 'react';
import { Gauge } from '@ant-design/plots';

interface GaugeProgressChartProps {
	percent: number; // Define prop type for percent
}

const GaugeProgressChart: React.FC<GaugeProgressChartProps> = ({ percent }) => {
	const config: any = {
		percent: percent, // Use the passed percent value
		range: {
			color: 'l(0) 0:#B8E1FF 1:#3D76DD'
		},
		startAngle: Math.PI,
		endAngle: 2 * Math.PI,
		indicator: null
		// statistic: {
		// 	title: {
		// 		offsetY: -36,
		// 		style: {
		// 			fontSize: '36px',
		// 			color: '#4B535E'
		// 		}
		// 		// formatter: () => '70%'
		// 	},
		// 	content: {
		// 		style: {
		// 			fontSize: '24px',
		// 			lineHeight: '44px',
		// 			color: '#4B535E'
		// 		}
		// 	}
		// }
	};

	return <Gauge style={{ maxHeight: '100px', paddingBottom: '10px' }} {...config} />;
};

export default GaugeProgressChart;
