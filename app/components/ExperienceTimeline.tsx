'use client';

import { Timeline } from 'flowbite-react';
import { ExperienceItem, ExperienceType } from 'app/components/ExperienceItem';
import type { Experience } from 'app/components/ExperienceItem';

const experiences: Experience[] = [
	{
		date: 'August 2018 - May 2022',
		title: 'University of California, Berkeley',
		description: "Bachelor's of Arts, Computer Science \n GPA: 3.80/4.0",
		type: ExperienceType.Education,
	},
	{
		date: 'June 2020 - August 2020',
		title: 'Listing Bird',
		description:
			'Software Engineering Intern \n Skills:  NodeJS • NestJS • AngularJS • MongoDB',
		type: ExperienceType.Industry,
	},
	{
		date: 'June 2021 - August 2021',
		title: 'Amazon',
		description:
			'Software Engineer Intern \n Skills:  Java • Mockito • AWS • DynamoDB',
		type: ExperienceType.Industry,
	},
	{
		date: 'July 2022 - May 2023',
		title: 'Nuro',
		description:
			'Software Engineer \n Skills:  Go • gRPC • Protobuf • GCP • MySQL',
		type: ExperienceType.Industry,
	},
	{
		date: 'June 2023 - July 2024',
		title: 'Applied Intuition',
		description:
			'Software Engineer \n Skills: TypeScript • React • Python • Protobuf • PostgreSQL',
		type: ExperienceType.Industry,
	},
	{
		date: 'August 2024 - May 2026',
		title: 'Georgia Institute of Technology',
		description: "Master's of Science, Computer Science",
		type: ExperienceType.Education,
	},
];

const ExperienceTimeline = (): JSX.Element => {
	return (
		<Timeline>
			{experiences.map((currentExperience: Experience): JSX.Element => {
				const { date, title, description, type } = currentExperience;
				return (
					<ExperienceItem
						date={date}
						title={title}
						description={description}
						type={type}
					/>
				);
			})}
		</Timeline>
	);
};

export default ExperienceTimeline;
