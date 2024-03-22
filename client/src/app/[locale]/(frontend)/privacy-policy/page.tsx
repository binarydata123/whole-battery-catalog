import ParaText from '@/app/commonUl/ParaText';
import Titles from '@/app/commonUl/Titles';
import React from 'react';
import './style.css';

export default function page() {
	return (
		<div>
			<section className="customContainer" id="privacyPolicy">
				<Titles level={4} color="PrimaryColor">
					Privacy Policy
				</Titles>
				<ParaText size="medium" color="black">
					This Privacy Policy explains how EV Battery Cars collects, uses, and discloses your information when
					you use our service to check car battery health using an API.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Information We Collect
				</Titles>
				<ParaText size="medium" color="black">
					When you use our service, we may collect the following informationliquet justo rutrum eu. Sed
					condimentum enim in lacus vestibulum, at scelerisque purus volutpat.
					<ul>
						<li>
							Personal Information: We may collect personal information such as your name, email address,
							and <br />
							phone number when you register for an account or contact us for support.
						</li>
						<li>
							Car Battery Information: We may collect information about your cars battery health,
							including
							<br />
							voltage, state of charge, and other diagnostic data provided by the API.
						</li>
						<li>
							Device Information: We may collect information about the device you use to access our
							service,
							<br />
							such as the device type, operating system, and IP address.
						</li>
					</ul>
				</ParaText>

				<Titles level={5} color="PrimaryColor">
					How We Use Your Information
				</Titles>
				<ParaText size="medium" color="black">
					<ul>
						<li>
							To provide and maintain our service, including checking and displaying car battery health
							information.
						</li>
						<li>
							To improve our service and develop new features based on user feedback and usage patterns.
						</li>
						<li>
							To communicate with you about our service, including responding to your inquiries and
							providing technical support.
						</li>
						<li>To comply with legal requirements and protect our rights and interests.</li>
					</ul>
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Information Sharing
				</Titles>
				<ParaText size="medium" color="black">
					<ul>
						<li>
							With your consent: We may share your information with third parties if you consent to such
							sharing.
						</li>
						<li>
							ervice Providers: We may share your information with third-party service providers who
							perform services on our behalf, such as hosting, data analysis, and customer support.
						</li>
						<li>
							Legal Compliance: We may disclose your information if required by law or in response to a
							valid legal request.
						</li>
					</ul>
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Data Security
				</Titles>
				<ParaText size="medium" color="black">
					We take reasonable measures to protect your information from unauthorized access, disclosure,
					alteration, or destruction. However, no method of transmission over the internet or electronic
					storage is 100% secure, and we cannot guarantee the absolute security of your information.
				</ParaText>
				<Titles level={5} color="PrimaryColor">
					Changes to This Privacy Policy
				</Titles>
				<ParaText size="medium" color="black" className="dBlock">
					We may update this Privacy Policy from time to time. We will notify you of any changes by posting
					the new Privacy Policy on this page.
				</ParaText>

				<ParaText size="medium" color="black">
					If you have any questions about our Privacy Policy, please contact us:
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
