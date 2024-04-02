import React from 'react';
import Lottie from 'lottie-react';
import animation from './animation.json';

const MyLottieAnimation = () => {
	return (
		<div style={{ width: 400, height: 400 }}>
			<Lottie animationData={animation} loop={true} autoplay={true} />
		</div>
	);
};

export default MyLottieAnimation;
