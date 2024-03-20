import React from 'react';
export default function InvoicePage() {
	return (
		<div>
			<div
				style={{
					maxWidth: '700px',
					margin: '0 auto',
					backgroundColor: '#fff',
					boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
					padding: '30px',
					borderRadius: '16px',
					marginTop: '20px'
				}}
			>
				<div style={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}>
					<div>looo</div>
					<div style={{ float: 'right', maxWidth: '300px' }}>
						<h5 style={{ color: '#000', fontSize: '40px', paddingBottom: '50px !important' }}>ivoice</h5>
						<div style={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}>
							<p>invoice no:</p>
							<span style={{ textAlign: 'right' }}>001</span>
						</div>
						<div style={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}>
							<p>invoice date:</p>
							<span style={{ textAlign: 'right' }}>july31,2024</span>
						</div>
						<div style={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}>
							<p>due date:</p>
							<span style={{ textAlign: 'right' }}>july31,2024</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
