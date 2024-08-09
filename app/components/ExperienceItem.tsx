import {
	TimelineItem,
	TimelinePoint,
	TimelineContent,
	TimelineTime,
	TimelineTitle,
	TimelineBody,
} from 'flowbite-react';

import { HiCalendar } from 'react-icons/hi';

export type Experience = {
	date: string;
	title: string;
	description: string;
};

export const ExperienceItem = (props: Experience): JSX.Element => {
	const { date, title, description } = props;

	return (
		<TimelineItem key={title}>
			<TimelinePoint />
			<TimelineContent>
				<TimelineTime>{date}</TimelineTime>
				<TimelineTitle>{title}</TimelineTitle>
				<TimelineBody className="whitespace-pre-line">
					{description}
				</TimelineBody>
			</TimelineContent>
		</TimelineItem>
	);
};
