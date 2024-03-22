import ParaText from '@/app/commonUl/ParaText';
import ContactUs from '@/components/ContactUs';

export default function page() {
	return (
		<>
			<div className="topbarSection">
				<ParaText size="large" color="white" className="textUppercase" fontWeightBold={600}>
					Contact us
				</ParaText>
			</div>
			<ContactUs />
		</>
	);
}
