import { Timeline } from 'flowbite-react';
import { ExperienceItem } from 'app/components/ExperienceItem';
import type { Experience } from 'app/components/ExperienceItem';

const experiences: Experience[] = [
	{
		date: 'August 2018 - May 2022',
		title: 'University of California, Berkeley',
		description: "Bachelor's of Arts, Computer Science \n GPA: 3.80/4.0",
	},
	{
		date: 'June 2020 - August 2020',
		title: 'Listing Bird',
		description:
			'Software Engineering Intern \n Skills:  NodeJS • NestJS • AngularJS • MongoDB',
	},
	{
		date: 'June 2021 - August 2021',
		title: 'Amazon',
		description:
			'Software Engineer Intern \n Skills:  Java • Mockito • AWS • DynamoDB',
	},
	{
		date: 'July 2022 - May 2023',
		title: 'Nuro',
		description:
			'Software Engineer \n Skills:  Go • gRPC • Protobuf • GCP • MySQL',
	},
	{
		date: 'June 2023 - July 2024',
		title: 'Applied Intuition',
		description:
			'Software Engineer \n Skills: TypeScript • React • Python • Protobuf • PostgreSQL',
	},
	{
		date: 'August 2024 - May 2026',
		title: 'Georgia Institute of Technology',
		description: "Master's of Science, Computer Science",
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
