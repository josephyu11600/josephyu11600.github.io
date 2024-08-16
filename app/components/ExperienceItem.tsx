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
import { useState } from 'react';
import ExperienceModal from './ExperienceModal';

export enum ExperienceType {
	Education,
	Industry,
}

export type Experience = {
	date: string;
	title: string;
	summary: string;
	type: ExperienceType;
};

type ExperienceProps = Experience & {
	key: string;
};

export const ExperienceItem = (props: ExperienceProps): JSX.Element => {
	const { date, title, summary, type } = props;
	const [openModal, setOpenModal] = useState(false);

	return (
		<TimelineItem key={title}>
			<TimelinePoint />
			<TimelineContent>
				<TimelineTime>{date}</TimelineTime>
				<TimelineTitle>{title}</TimelineTitle>
				<TimelineBody className="whitespace-pre-line">
					{summary}
				</TimelineBody>
				{type === ExperienceType.Industry ? (
					<>
						<ExperienceModal
							header={title}
							body=""
							shouldShowModal={openModal}
							setOpenModal={setOpenModal}
						/>
					</>
				) : null}
			</TimelineContent>
		</TimelineItem>
	);
};
