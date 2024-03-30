'use client';
import ParaText from '@/app/commonUl/ParaText';
import { Col, Image, Row, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './style.css';
import RateStar from '@/app/commonUl/RateStar';
import { CiHeart } from 'react-icons/ci';
import { fetchDataByVendorId } from '@/lib/vendorApi';
import ColumnChart from '@/components/ColumnChart';
import GaugeProgressChart from '@/components/GaugeProgressChart';
import LineChart from '@/components/LineChart';
import GaugeFullProgressChart from '@/components/GaugeFullProgressChart';

export default function Page() {
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		fetchDataByVendorId()
			.then((responseData) => {
				console.log(responseData);
				// setData(responseData);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};

	const dataSource = [
		{ key: '1', oem: 'OEM1', model: 'Model1', serial: 'Serial1', date: '2024-03-28' },
		{ key: '2', oem: 'OEM2', model: 'Model2', serial: 'Serial2', date: '2024-03-27' },
		{ key: '3', oem: 'OEM3', model: 'Model3', serial: 'Serial3', date: '2024-03-26' },
		{ key: '4', oem: 'OEM4', model: 'Model4', serial: 'Serial4', date: '2024-03-25' },
		{ key: '5', oem: 'OEM5', model: 'Model5', serial: 'Serial5', date: '2024-03-24' }
	];

	// Columns configuration for the table
	const columns = [
		{
			title: 'OEM',
			dataIndex: 'oem',
			key: 'oem'
		},
		{
			title: 'MODEL',
			dataIndex: 'model',
			key: 'model'
		},
		{
			title: 'SERIAL',
			dataIndex: 'serial',
			key: 'serial'
		},
		{
			title: 'DATE',
			dataIndex: 'date',
			key: 'date'
		}
	];

	const lineChartData = [
		{
			Date: '2010-01',
			scales: 1998
		},
		{
			Date: '2010-02',
			scales: 1850
		},
		{
			Date: '2010-03',
			scales: 1720
		},
		{
			Date: '2010-04',
			scales: 1818
		},
		{
			Date: '2010-05',
			scales: 1920
		},
		{
			Date: '2010-06',
			scales: 1802
		},
		{
			Date: '2010-07',
			scales: 1945
		},
		{
			Date: '2010-08',
			scales: 1856
		},
		{
			Date: '2010-09',
			scales: 2107
		},
		{
			Date: '2010-10',
			scales: 2140
		},
		{
			Date: '2010-11',
			scales: 2311
		},
		{
			Date: '2010-12',
			scales: 1972
		},
		{
			Date: '2011-01',
			scales: 1760
		},
		{
			Date: '2011-02',
			scales: 1824
		},
		{
			Date: '2011-03',
			scales: 1801
		},
		{
			Date: '2011-04',
			scales: 2001
		},
		{
			Date: '2011-05',
			scales: 1640
		},
		{
			Date: '2011-06',
			scales: 1502
		},
		{
			Date: '2011-07',
			scales: 1621
		},
		{
			Date: '2011-08',
			scales: 1480
		},
		{
			Date: '2011-09',
			scales: 1549
		},
		{
			Date: '2011-10',
			scales: 1390
		},
		{
			Date: '2011-11',
			scales: 1325
		},
		{
			Date: '2011-12',
			scales: 1250
		},
		{
			Date: '2012-01',
			scales: 1394
		},
		{
			Date: '2012-02',
			scales: 1406
		},
		{
			Date: '2012-03',
			scales: 1578
		},
		{
			Date: '2012-04',
			scales: 1465
		},
		{
			Date: '2012-05',
			scales: 1689
		},
		{
			Date: '2012-06',
			scales: 1755
		},
		{
			Date: '2012-07',
			scales: 1495
		},
		{
			Date: '2012-08',
			scales: 1508
		},
		{
			Date: '2012-09',
			scales: 1433
		},
		{
			Date: '2012-10',
			scales: 1344
		},
		{
			Date: '2012-11',
			scales: 1201
		},
		{
			Date: '2012-12',
			scales: 1065
		},
		{
			Date: '2013-01',
			scales: 1255
		},
		{
			Date: '2013-02',
			scales: 1429
		},
		{
			Date: '2013-03',
			scales: 1398
		},
		{
			Date: '2013-04',
			scales: 1678
		},
		{
			Date: '2013-05',
			scales: 1524
		},
		{
			Date: '2013-06',
			scales: 1688
		},
		{
			Date: '2013-07',
			scales: 1500
		},
		{
			Date: '2013-08',
			scales: 1670
		},
		{
			Date: '2013-09',
			scales: 1734
		},
		{
			Date: '2013-10',
			scales: 1699
		},
		{
			Date: '2013-11',
			scales: 1508
		},
		{
			Date: '2013-12',
			scales: 1680
		},
		{
			Date: '2014-01',
			scales: 1750
		},
		{
			Date: '2014-02',
			scales: 1602
		},
		{
			Date: '2014-03',
			scales: 1834
		},
		{
			Date: '2014-04',
			scales: 1722
		},
		{
			Date: '2014-05',
			scales: 1430
		},
		{
			Date: '2014-06',
			scales: 1280
		},
		{
			Date: '2014-07',
			scales: 1367
		},
		{
			Date: '2014-08',
			scales: 1155
		},
		{
			Date: '2014-09',
			scales: 1289
		},
		{
			Date: '2014-10',
			scales: 1104
		},
		{
			Date: '2014-11',
			scales: 1246
		},
		{
			Date: '2014-12',
			scales: 1098
		},
		{
			Date: '2015-01',
			scales: 1189
		},
		{
			Date: '2015-02',
			scales: 1276
		},
		{
			Date: '2015-03',
			scales: 1033
		},
		{
			Date: '2015-04',
			scales: 956
		},
		{
			Date: '2015-05',
			scales: 845
		},
		{
			Date: '2015-06',
			scales: 1089
		},
		{
			Date: '2015-07',
			scales: 944
		},
		{
			Date: '2015-08',
			scales: 1043
		},
		{
			Date: '2015-09',
			scales: 893
		},
		{
			Date: '2015-10',
			scales: 840
		},
		{
			Date: '2015-11',
			scales: 934
		},
		{
			Date: '2015-12',
			scales: 810
		},
		{
			Date: '2016-01',
			scales: 782
		},
		{
			Date: '2016-02',
			scales: 1089
		},
		{
			Date: '2016-03',
			scales: 745
		},
		{
			Date: '2016-04',
			scales: 680
		},
		{
			Date: '2016-05',
			scales: 802
		},
		{
			Date: '2016-06',
			scales: 697
		},
		{
			Date: '2016-07',
			scales: 583
		},
		{
			Date: '2016-08',
			scales: 456
		},
		{
			Date: '2016-09',
			scales: 524
		},
		{
			Date: '2016-10',
			scales: 398
		},
		{
			Date: '2016-11',
			scales: 278
		},
		{
			Date: '2016-12',
			scales: 195
		},
		{
			Date: '2017-01',
			scales: 145
		},
		{
			Date: '2017-02',
			scales: 207
		}
	];

	const carVoltageDistData = {
		barLabels: {
			'0': 3.6111,
			'1': 3.6117,
			'2': 3.6122,
			'3': 3.6128,
			'4': 3.6134,
			'5': 3.614,
			'6': 3.6146,
			'7': 3.6152,
			'8': 3.6157,
			'9': 3.6163
		},
		barHeights: {
			'0': 1,
			'1': 0,
			'2': 7,
			'3': 3,
			'4': 0,
			'5': 9,
			'6': 3,
			'7': 9,
			'8': 11,
			'9': 9
		}
	};

	return (
		<>
			<Row className="page-container">
				<Col xl={7} className="left-section">
					<h2>Battery Packs</h2>
					<Table dataSource={dataSource} columns={columns} pagination={false} />
				</Col>
				<Col span={17} className="right-section">
					<Row gutter={[16, 16]}>
						<Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
							<h1 style={{ margin: 0 }}>Tesla Model 3</h1>
						</Col>
						<Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
							<p style={{ margin: 0 }}>SN10237</p>
						</Col>
						<Col span={8} style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p style={{ textTransform: 'uppercase', margin: 0, marginRight: '8px' }}>
									Report Selection
								</p>
								<Select defaultValue="" style={{ width: '40%', marginLeft: '10px' }}>
									<Select.Option value="">Most recent</Select.Option>
									<Select.Option value="Option 1">Oldest</Select.Option>
									<Select.Option value="Option 2">Option 2</Select.Option>
									<Select.Option value="Option 3">Option 3</Select.Option>
								</Select>
							</div>
						</Col>
					</Row>
					<hr style={{ margin: '20px 0' }} />
					<Row gutter={[16, 16]} justify="center" align="middle" style={{ minHeight: '10vh' }}>
						<Col span={6} style={{ display: 'flex', alignItems: 'center' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p style={{ fontSize: '20px', marginRight: '8px' }}>SOH</p>
								{/* <span
									style={{
										marginLeft: '8px',
										paddingLeft: '8px',
										fontSize: '40px'
									}}
								>

								</span> */}
								<GaugeFullProgressChart percent={0.9} />
							</div>
						</Col>
						<Col span={6} style={{ display: 'flex', alignItems: 'center', borderLeft: '1px solid #ccc' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p style={{ fontSize: '20px', marginRight: '8px' }}>GRADE</p>
								<span
									style={{
										marginLeft: '8px',
										paddingLeft: '8px',
										fontSize: '40px'
									}}
								>
									A
								</span>
							</div>
						</Col>
						<Col
							span={6}
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								borderLeft: '1px solid #ccc'
							}}
						>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p style={{ fontSize: '20px', marginRight: '8px' }}>VALUE $ </p>
								<span
									style={{
										marginLeft: '8px',
										fontSize: '40px'
									}}
								>
									9000
								</span>
							</div>
						</Col>
					</Row>
					<Row gutter={[16, 16]} style={{ justifyContent: 'center', paddingTop: '20px' }}>
						<Col xl={8} style={{ alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
							<p style={{ margin: 0, fontSize: '20px' }}>Battery Specs</p>
							<hr style={{ margin: '5px 0' }} />
							<Row gutter={[16, 16]}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>BOL Capacity</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>77.8 kWh</p>
								</Col>
							</Row>
							<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>Chemistry</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>NCA</p>
								</Col>
							</Row>
							<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>Cell Configuration</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>96s46p</p>
								</Col>
							</Row>
							<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>Cell Type</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>2170</p>
								</Col>
							</Row>
						</Col>
						<Col xl={8} style={{ alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
							<p style={{ margin: 0, fontSize: '20px' }}>Age</p>
							<hr style={{ margin: '5px 0' }} />

							<Row gutter={[16, 16]}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>Calendar Age</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>7 years</p>
								</Col>
							</Row>
							<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>Cycle Count</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>130 cycles</p>
								</Col>
							</Row>
							<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>Dch Energy</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>900 kWh</p>
								</Col>
							</Row>
							<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>EV Mileage</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>115200 miles</p>
								</Col>
							</Row>
						</Col>
						<Col xl={8} style={{ alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
							<p style={{ margin: 0, fontSize: '20px' }}>Battery Readings</p>
							<hr style={{ margin: '5px 0' }} />

							<Row gutter={[16, 16]}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>Pack Voltage</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>345.5 V</p>
								</Col>
							</Row>
							<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>Pack SOC</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>55%</p>
								</Col>
							</Row>
							<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
								<Col xl={12} style={{}}>
									<p style={{ margin: 0, fontSize: '14px' }}>Pack Temp</p>
								</Col>
								<Col xl={12} style={{ textAlign: 'end' }}>
									<p style={{ margin: 0, fontSize: '14px' }}>25° C</p>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row gutter={[16, 16]} style={{ paddingTop: '30px' }}>
						<Col xl={12} style={{}}>
							<p style={{ margin: 0, fontSize: '20px', textAlign: 'center' }}>
								Car Voltage Distribution{' '}
							</p>
							<ColumnChart
								barLabels={carVoltageDistData.barLabels}
								barHeights={carVoltageDistData.barHeights}
								xField="customX"
								yField="customY"
							/>
						</Col>
						<Col xl={12}>
							<p style={{ margin: 0, fontSize: '20px', textAlign: 'center' }}></p>
							<Row gutter={[16, 16]} style={{ justifyContent: 'center', paddingTop: '40px' }}>
								<Col xl={16} style={{ alignItems: 'center' }}>
									<p style={{ margin: 0, fontSize: '20px' }}>Cell Voltage matrices</p>
									<hr style={{ margin: '5px 0' }} />
									<Row gutter={[16, 16]}>
										<Col xl={12} style={{}}>
											<p style={{ margin: 0, fontSize: '14px' }}>Mean Cell Voltage</p>
										</Col>
										<Col xl={12} style={{ textAlign: 'end' }}>
											<p style={{ margin: 0, fontSize: '14px' }}>3.6 V</p>
										</Col>
									</Row>
									<Row gutter={[16, 16]} style={{ paddingTop: '40px' }}>
										<Col xl={12} style={{ textAlign: 'center' }}>
											<GaugeProgressChart percent={0.75} />
											<p style={{ margin: 0, fontSize: '14px' }}>
												<strong>2.1 mVv</strong>
											</p>
											<p style={{ margin: 0, fontSize: '14px' }}>Cell V Std Dev</p>
										</Col>
										<Col xl={12} style={{ textAlign: 'center' }}>
											<GaugeProgressChart percent={0.5} />
											<p style={{ margin: 0, fontSize: '14px' }}>
												<strong>5.0 mV</strong>
											</p>
											<p style={{ margin: 0, fontSize: '14px' }}>Cell V Max-Min Range</p>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row gutter={[16, 16]} style={{ paddingTop: '50px' }}>
						<Col xl={12} style={{}}>
							<p style={{ margin: 0, fontSize: '20px', textAlign: 'center' }}></p>
							<Row gutter={[16, 16]} style={{ justifyContent: 'center', paddingTop: '30px' }}>
								<Col xl={16} style={{ alignItems: 'center' }}>
									<p style={{ margin: 0, fontSize: '20px' }}>Estimated Remaining Lifespan</p>
									<hr style={{ margin: '5px 0' }} />
									<Row gutter={[16, 16]}>
										<Col xl={12} style={{}}>
											<p style={{ margin: 0, fontSize: '14px' }}>Capacity</p>
										</Col>
										<Col xl={12} style={{ textAlign: 'end' }}>
											<p style={{ margin: 0, fontSize: '14px' }}>66.9 kWh</p>
										</Col>
									</Row>
									<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
										<Col xl={12} style={{}}>
											<p style={{ margin: 0, fontSize: '14px' }}>C Rate</p>
										</Col>
										<Col xl={12} style={{ textAlign: 'end' }}>
											<p style={{ margin: 0, fontSize: '14px' }}>1⁄4C</p>
										</Col>
									</Row>
									<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
										<Col xl={12} style={{}}>
											<p style={{ margin: 0, fontSize: '14px' }}>Remaining Cycles</p>
										</Col>
										<Col xl={12} style={{ textAlign: 'end' }}>
											<p style={{ margin: 0, fontSize: '14px' }}>2780</p>
										</Col>
									</Row>
									<Row gutter={[16, 16]} style={{ paddingTop: '15px' }}>
										<Col xl={12} style={{}}>
											<p style={{ margin: 0, fontSize: '14px' }}>Remaining Years</p>
										</Col>
										<Col xl={12} style={{ textAlign: 'end' }}>
											<p style={{ margin: 0, fontSize: '14px' }}>9.3</p>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
						<Col xl={12}>
							<p style={{ margin: 0, fontSize: '20px', textAlign: 'center' }}>
								Predicted Repurposed Lifespan{' '}
							</p>
							<LineChart data={lineChartData} />
							<p style={{ margin: 0, fontSize: '20px', textAlign: 'center' }}>Years </p>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}
