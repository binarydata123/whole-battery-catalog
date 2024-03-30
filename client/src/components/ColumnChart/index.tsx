import React from 'react';
import { Column } from '@ant-design/plots';

interface ColumnChartProps {
	barLabels: any;
	barHeights: Record<string, number>;
	xField: string; // Custom xField name
	yField: string; // Custom yField name
}

const ColumnChart: React.FC<ColumnChartProps> = ({ barLabels, barHeights, xField, yField }) => {
	const data = Object.keys(barLabels).map((key) => ({
		[xField]: barLabels[key]?.toString(),
		[yField]: barHeights[key]
	}));

	const config = {
		data,
		xField,
		yField,
		columnWidthRatio: 0.8,
		xAxis: {
			label: {
				autoHide: true,
				autoRotate: false
			}
		},
		meta: {
			[xField]: {
				alias: 'Voltage'
			},
			[yField]: {
				alias: 'Frequency'
			}
		}
	};

	return <Column style={{ maxHeight: '250px' }} {...config} />;
};

export default ColumnChart;
