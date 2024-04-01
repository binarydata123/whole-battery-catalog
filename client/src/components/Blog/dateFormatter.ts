export const dateFormatter = (isoDateString: string): string => {
	const date = new Date(isoDateString);

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: '2-digit'
	};

	const formattedDate: string = date.toLocaleDateString('en-US', options);
	return formattedDate;
};
