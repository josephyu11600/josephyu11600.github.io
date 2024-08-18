'use client';

import Experiences, {
	Experience,
	ExperienceType,
} from 'app/components/Experience';
import { experiences } from './experienceDetails';

const getListElemFromDescription = (description: string[]): JSX.Element => {
	return (
		<ul className="list-disc list-outside ml-3">
			{description.map((line: string) => {
				return (
					<li key={line} className="list-item mt-5">
						{line}
					</li>
				);
			})}
		</ul>
	);
};

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
							const {
								date,
								title,
								summary,
								type,
								bulleted_description,
							} = currentExperience;
							return (
								<Experiences.Item
									date={date}
									title={title}
									summary={summary}
									type={type}
									key={title}
								>
									{type === ExperienceType.Industry ? (
										<Experiences.Drawer
											header={title}
											items={getListElemFromDescription(
												bulleted_description ?? []
											)}
										/>
									) : undefined}
								</Experiences.Item>
							);
						}
					)}
				</Experiences.Timeline>
			</Experiences>
		</section>
	);
}
