import React from 'react';
import Lottie from 'lottie-react';
//  animation from './animation.json';

const MyLottieAnimation = () => {
	return (
		<div style={{ width: 400, height: 400 }}>
			<Lottie animationData={require('./animation.json')} loop={true} autoplay={true} />
		</div>
	);
};

export default MyLottieAnimation;
