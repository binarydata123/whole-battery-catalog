'use client';
import ParaText from '@/app/commonUl/ParaText';
import Titles from '@/app/commonUl/Titles';
import React from 'react';
export default function FormModalDelete() {
	return (
		<>
			<div className="textCenter">
				<Titles level={5} color="defaultColor">
					Delete Author
				</Titles>
				<ParaText color="black" size="medium">
					{' '}
					Are you sure you want to delete the Author?.
				</ParaText>
			</div>
		</>
	);
}
