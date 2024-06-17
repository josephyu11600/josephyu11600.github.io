'use client'; // This directive makes the component client-side so we can use hooks

import { useEffect, useState } from 'react';

const HeaderValues = ['Frontend', 'Backend', 'Full-stack'];
const DynamicHeader = (): JSX.Element => {
	// Store the index of the next header value we should use.
	const [headerValueIndex, setHeaderValueIndex] = useState(0);
	// Track the current header text to render.
	const [headerText, setHeaderText] = useState('');
	// Store the index of the next character to add to the header text.
	const [headerIndex, setHeaderIndex] = useState(0);
	// Whether or not we are actively typing the next header value.
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		let timeout;
		if (!isDeleting) {
			const currentHeaderValue = HeaderValues[headerValueIndex];
			timeout = setTimeout(() => {
				if (headerIndex < currentHeaderValue.length) {
					setHeaderText((prevHeaderText): string => {
						return prevHeaderText + currentHeaderValue[headerIndex];
					});
					setHeaderIndex((prevHeaderIndex): number => {
						return prevHeaderIndex + 1;
					});
				} else {
					// We don't want to start deleting right away so we can pause for 1 second before flipping the flag.
					setTimeout(() => {
						setIsDeleting(true);
					}, 1000);
				}
			}, 200);
		} else {
			if (!headerText) {
				setHeaderValueIndex((prevHeaderValueIndex): number => {
					return (prevHeaderValueIndex + 1) % HeaderValues.length;
				});
				setHeaderIndex(0);
				setIsDeleting(false);
			}
			timeout = setTimeout(() => {
				setHeaderText((prevHeaderText) => {
					return prevHeaderText.substring(
						0,
						prevHeaderText.length - 1
					);
				});
			}, 80);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [
		headerIndex,
		headerText,
		headerValueIndex,
		isDeleting,
		setHeaderIndex,
		setHeaderText,
		setHeaderValueIndex,
		setIsDeleting,
	]);

	return (
		<h1 className="mb-4 text-2xl font-semibold tracking-tighter min-h-16">
			{headerText}
		</h1>
	);
};

export default DynamicHeader;
