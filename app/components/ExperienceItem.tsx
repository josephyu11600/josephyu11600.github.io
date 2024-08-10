import {
	TimelineItem,
	TimelinePoint,
	TimelineContent,
	TimelineTime,
	TimelineTitle,
	TimelineBody,
	Button,
} from 'flowbite-react';
import PortfolioButton from './PortfolioButton';

export type Experience = {
	date: string;
	title: string;
	description: string;
};

type ExperienceItemProps = Experience & {
	shouldAddLearnMore?: boolean;
};

export const ExperienceItem = (props: ExperienceItemProps): JSX.Element => {
	const { date, title, description, shouldAddLearnMore } = props;

	return (
		<TimelineItem key={title}>
			<TimelinePoint />
			<TimelineContent>
				<TimelineTime>{date}</TimelineTime>
				<TimelineTitle>{title}</TimelineTitle>
				<TimelineBody className="whitespace-pre-line">
					{description}
				</TimelineBody>
				{shouldAddLearnMore ? (
					<PortfolioButton text="Learn More" onClick={() => {}} />
				) : null}
			</TimelineContent>
		</TimelineItem>
	);
};
