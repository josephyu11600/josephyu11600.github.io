'use client';

import {
	TimelineItem,
	TimelinePoint,
	TimelineContent,
	TimelineTime,
	TimelineTitle,
	TimelineBody,
} from 'flowbite-react';
import PortfolioButton from './PortfolioButton';

export enum ExperienceType {
	Education,
	Industry,
}

export type Experience = {
	date: string;
	title: string;
	description: string;
	type: ExperienceType;
};

type ExperienceProps = Experience & {
	key: string;
};

export const ExperienceItem = (props: ExperienceProps): JSX.Element => {
	const { date, title, description, type } = props;

	return (
		<TimelineItem key={title}>
			<TimelinePoint />
			<TimelineContent>
				<TimelineTime>{date}</TimelineTime>
				<TimelineTitle>{title}</TimelineTitle>
				<TimelineBody className="whitespace-pre-line">
					{description}
				</TimelineBody>
				{type === ExperienceType.Industry ? (
					<PortfolioButton text="Learn More" onClick={() => {}} />
				) : null}
			</TimelineContent>
		</TimelineItem>
	);
};
