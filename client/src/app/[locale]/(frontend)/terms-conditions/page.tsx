'use client';
import ParaText from '@/app/commonUl/ParaText';
import Titles from '@/app/commonUl/Titles';
import React from 'react';

export default function page() {
	return (
		<>
			<section className="customContainer">
				<Titles level={4} color="PrimaryColor">
					EV Battery Terms & Conditions
				</Titles>
				<ParaText size="medium" color="black">
					Welcome to our website. If you continue to browse and use this website, you are agreeing to comply
					with and be bound by the following terms and conditions of use, which together with our Privacy
					Policy govern our relationship with you in relation to this website. If you disagree with any part
					of these terms and conditions, please do not use our website.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Acceptance of Terms
				</Titles>
				<ParaText size="medium" color="black">
					Welcome to our website. If you continue to browse and use this website, you are agreeing to comply
					with and be bound by the following terms and conditions of use, which together with our Privacy
					Policy govern our relationship with you in relation to this website. If you disagree with any part
					of these terms and conditions, please do not use our website.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Use of Website
				</Titles>
				<ParaText size="medium" color="black">
					The content of the pages of this website is for your general information and use only. It is subject
					to change without notice.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Accuracy of Information
				</Titles>
				<ParaText size="medium" color="black">
					Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness,
					performance, completeness, or suitability of the information and materials found or offered on this
					website for any particular purpose. You acknowledge that such information and materials may contain
					inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to
					the fullest extent permitted by law.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Your Responsibility
				</Titles>
				<ParaText size="medium" color="black">
					Your use of any information or materials on this website is entirely at your own risk, for which we
					shall not be liable. It shall be your own responsibility to ensure that any products, services, or
					information available through this website meet your specific requirements.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Copyright Notice
				</Titles>
				<ParaText size="medium" color="black">
					This website contains material which is owned by or licensed to us. This material includes, but is
					not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other
					than in accordance with the copyright notice, which forms part of these terms and conditions.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Trademarks
				</Titles>
				<ParaText size="medium" color="black">
					All trademarks reproduced in this website, which are not the property of, or licensed to the
					operator, are acknowledged on the website.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Linked Websites
				</Titles>
				<ParaText size="medium" color="black">
					From time to time, this website may also include links to other websites. These links are provided
					for your convenience to provide further information. They do not signify that we endorse the
					website(s). We have no responsibility for the content of the linked website(s).
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Governing Law
				</Titles>
				<ParaText size="medium" color="black">
					Your use of this website and any dispute arising out of such use of the website is subject to the
					laws of [your country].
				</ParaText>
				<div className="gapMarginFourTeenTop"></div>
				<ParaText size="medium" color="black">
					If you have any questions about our EV Battery Terms & Conditions, please contact us:
					<br />
					Email: info@example.com
					<br />
					Phone: 123-456-7890
				</ParaText>
			</section>

			<div className="gapMarginFourTeenTop"></div>
		</>
	);
}
