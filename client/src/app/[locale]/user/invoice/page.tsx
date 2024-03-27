'use client';
import React from 'react';
import './style.css';
import TableInvoice from './TableInvoice';
import Titles from '@/app/commonUl/Titles';
export default function page() {
	return (
		<>
			<div className="invoiceSettings">
				<Titles level={5} color="black">
					Product Listing
				</Titles>
				<div className="gapMarginTopTwo"></div>
				<TableInvoice />
			</div>
		</>
	);
}
