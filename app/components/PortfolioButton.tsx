'use client';

import { Button } from 'flowbite-react';

type PortfolioButtonProps = {
	text: string;
	onClick: () => void;
};

const PortfolioButton = (props: PortfolioButtonProps): JSX.Element => {
	const { text, onClick } = props;
	return (
		<Button color="gray" onClick={onClick}>
			{text}
		</Button>
	);
};

export default PortfolioButton;
