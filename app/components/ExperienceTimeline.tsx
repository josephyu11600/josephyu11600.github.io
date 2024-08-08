import { Timeline } from 'flowbite-react';
import { ExperienceItem } from 'app/components/ExperienceItem';
import type { Experience } from 'app/components/ExperienceItem';

const experiences: Experience[] = [
	{
		date: 'August 2022',
		title: 'University of California, Berkeley',
		description: "Bachelor's of Arts, Computer Science \n GPA: 3.80/4.0",
	},
	{
		date: 'June 2020 - August 2020',
		title: 'Software Engineer Intern - Listing Bird',
		description: '',
	},
	{
		date: 'June 2021 - August 2021',
		title: 'Software Engineer Intern - Amazon',
		description: '',
	},
	{
		date: 'July 2022 - May 2023',
		title: 'Software Engineer - Nuro',
		description: '',
	},
	{
		date: 'June 2023 - July 2024',
		title: 'Software Engineer - Applied Intuition',
		description:
			'Skills: TypeScript • React • Python • Protobuf • PostgreSQL',
	},
];

const ExperienceTimeline = (): JSX.Element => {
	return (
		<Timeline>
			{experiences.map((currentExperience: Experience): JSX.Element => {
				const { date, title, description } = currentExperience;
				return (
					<ExperienceItem
						date={date}
						title={title}
						description={description}
					/>
				);
			})}
		</Timeline>
	);
};

export default ExperienceTimeline;
