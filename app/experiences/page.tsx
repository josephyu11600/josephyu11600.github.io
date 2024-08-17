'use client';

import Experiences, {
	Experience,
	ExperienceType,
} from 'app/components/Experience';

const experiences: Experience[] = [
	{
		date: 'August 2018 - May 2022',
		title: 'University of California, Berkeley',
		summary: "Bachelor's of Arts, Computer Science \n GPA: 3.80/4.0",
		type: ExperienceType.Education,
	},
	{
		date: 'June 2020 - August 2020',
		title: 'Listing Bird',
		summary:
			'Software Engineering Intern \n Skills:  NodeJS • NestJS • AngularJS • MongoDB',
		type: ExperienceType.Industry,
	},
	{
		date: 'June 2021 - August 2021',
		title: 'Amazon',
		summary:
			'Software Engineer Intern \n Skills:  Java • Mockito • AWS • DynamoDB',
		type: ExperienceType.Industry,
	},
	{
		date: 'July 2022 - May 2023',
		title: 'Nuro',
		summary:
			'Software Engineer \n Skills:  Go • gRPC • Protobuf • GCP • MySQL',
		type: ExperienceType.Industry,
	},
	{
		date: 'June 2023 - July 2024',
		title: 'Applied Intuition',
		summary:
			'Software Engineer \n Skills: TypeScript • React • Python • Protobuf • PostgreSQL',
		type: ExperienceType.Industry,
	},
	{
		date: 'August 2024 - May 2026',
		title: 'Georgia Institute of Technology',
		summary: "Master's of Science, Computer Science",
		type: ExperienceType.Education,
	},
];

export default function Page() {
	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">
				Experiences
			</h1>
			<Experiences>
				<Experiences.Timeline>
					{experiences.map(
						(currentExperience: Experience): JSX.Element => {
							const { date, title, summary, type } =
								currentExperience;
							return (
								<Experiences.Item
									date={date}
									title={title}
									summary={summary}
									type={type}
									key={title}
								/>
							);
						}
					)}
				</Experiences.Timeline>
			</Experiences>
		</section>
	);
}
