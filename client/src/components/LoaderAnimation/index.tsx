'use client';
// import Lottie from 'lottie-react';
// import animation from './Animation.json';
import { Image } from 'antd';
import './styles.css';

const MyLottieAnimation = () => {
	return (
		<div className="loader-overlay">
			<div style={{ width: 150, height: 'auto' }}>
				{/* <Lottie animationData={animation} loop={true} autoplay={true} /> */}
				{/* <p>udasdgasd</p> */}
				<Image src="/images/826.gif" alt="Loading..." width="100%" height="100%" />
			</div>
		</div>
	);
};

export default MyLottieAnimation;
