// Filename: pages/index.js
// 'use client';
// import { Button } from 'antd';
// import { useState } from 'react';

import Home from '@/components/Home';

// import { CiDark } from 'react-icons/ci';
export default function page() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	// const [darkMode, setDarkMode] = useState(false);

	// const toggleDarkMode = () => {
	// 	setDarkMode(!darkMode);
	// };
	return (
		// <div className={darkMode ? 'dark-mode' : 'light-mode'}>
		// 	<div className="custocon"></div>
		// 	<Button onClick={toggleDarkMode} icon={<CiDark />}></Button>
		// </div>
		<>
			<Home />
		</>
	);
}
