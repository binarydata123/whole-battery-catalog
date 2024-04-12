import ParaText from '@/app/commonUl/ParaText';
import Titles from '@/app/commonUl/Titles';
import React from 'react';

export default function RefundPolicy() {
	return (
		<div>
			<div className="gapMarginFourTeenTop"></div>
			<section className="customContainer">
				<Titles level={4} color="PrimaryColor">
					Refund Policy
				</Titles>
				<ParaText size="medium" color="black">
					Thank you for shopping at Whole Battery Catalog. If you are not entirely satisfied with your
					purchase, were here to help.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Returns
				</Titles>
				<ParaText size="medium" color="black">
					You have [number of days, e.g., 30 days] calendar days to return an item from the date you received
					it. To be eligible for a return, your item must be unused and in the same condition that you
					received it. Your item must be in the original packaging.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Refunds
				</Titles>
				<ParaText size="medium" color="black">
					Once we receive your item, we will inspect it and notify you that we have received your returned
					item. We will immediately notify you on the status of your refund after inspecting the item. If your
					return is approved, we will initiate a refund to your credit card (or original method of payment).
					You will receive the credit within a certain amount of days, depending on your card issuers
					policies.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Shipping
				</Titles>
				<ParaText size="medium" color="black">
					You will be responsible for paying for your own shipping costs for returning your item. Shipping
					costs are non-refundable.
				</ParaText>

				<div className="gapMarginFourTeenTop"></div>
				<Titles level={5} color="PrimaryColor">
					Contact Us
				</Titles>
				<ParaText size="medium" color="black" className="dBlock">
					If you have any questions about our Refund Policy, please contact us:
					<br />
					Email: info@example.com
					<br />
					Phone: 123-456-7890
				</ParaText>
			</section>

			<div className="gapMarginFourTeenTop"></div>
		</div>
	);
}
