'use client';

import {
	Timeline,
	TimelineBody,
	TimelineContent,
	TimelineItem,
	TimelinePoint,
	TimelineTime,
	TimelineTitle,
} from 'flowbite-react';
import { useCallback, useRef, useState } from 'react';
import PortfolioButton from './PortfolioButton';
import { Button, Modal } from 'react-daisyui';

type ExperienceModalProps = {
	header: string;
	body: string;
};

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

export default function Experiences({ children }): JSX.Element {
	return <>{children}</>;
}

Experiences.Timeline = ({ children }) => {
	return <Timeline>{children}</Timeline>;
};

Experiences.Modal = (modalProps: ExperienceModalProps) => {
	const { header, body } = modalProps;
	const ref = useRef<HTMLDialogElement>(null);
	const handleShow = useCallback(() => {
		ref.current?.showModal();
	}, [ref]);

	return (
		<>
			<PortfolioButton text="Learn More" onClick={handleShow} />
			<Modal backdrop onClick={handleShow} ref={ref}>
				<form method="dialog">
					<Button
						size="sm"
						color="ghost"
						shape="circle"
						className="absolute right-3 top-2"
					>
						x
					</Button>
				</form>
				<Modal.Header>{header}</Modal.Header>
				<Modal.Body>{body}</Modal.Body>
			</Modal>
		</>
	);
};
Experiences.Item = (props: ExperienceProps): JSX.Element => {
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
						<Experiences.Modal header={title} body="" />
					</>
				) : null}
			</TimelineContent>
		</TimelineItem>
	);
};
