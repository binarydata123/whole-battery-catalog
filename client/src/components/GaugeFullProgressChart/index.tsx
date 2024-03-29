import React from 'react';
import { Gauge } from '@ant-design/plots';

interface GaugeProgressChartProps {
	percent: number; // Define prop type for percent
}

const GaugeFullProgressChart: React.FC<GaugeProgressChartProps> = ({ percent }) => {
	const config = {
		percent: percent, // Use the passed percent value
		range: {
			color: 'l(0) 0:#B8E1FF 1:#3D76DD'
		},
		startAngle: 0, // Set startAngle to 0 for full circle
		endAngle: 2 * Math.PI, // Set endAngle to 2 * Math.PI for full circle
		indicator: null,
		statistic: {
			title: {
				offsetY: -36,
				style: {
					fontSize: '36px',
					color: '#4B535E'
				}
				// formatter: () => '70%'
			},
			content: {
				style: {
					fontSize: '24px',
					lineHeight: '44px',
					color: '#4B535E'
				}
			}
		}
	};

	return <Gauge style={{ maxHeight: '100px', minWidth: '100px', paddingBottom: '10px' }} {...config} />;
};

export default GaugeFullProgressChart;
