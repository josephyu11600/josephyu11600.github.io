'use client';

import {
	Drawer,
	Timeline,
	TimelineBody,
	TimelineContent,
	TimelineItem,
	TimelinePoint,
	TimelineTime,
	TimelineTitle,
} from 'flowbite-react';
import { useCallback, useRef, useState } from 'react';
import { Button, Modal } from 'react-daisyui';

type ExperienceModalProps = {
	header: string;
	body: string;
};

type DrawerProps = {
	header: string;
	items?: JSX.Element;
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
	bulleted_description?: string[];
};

type ExperienceItemProps = Experience & {
	key: string;
	children?: JSX.Element;
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
			<Button onClick={handleShow}>Learn More</Button>
			<Modal backdrop ref={ref}>
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
Experiences.Item = (props: ExperienceItemProps): JSX.Element => {
	const { date, title, summary, children } = props;

	return (
		<TimelineItem key={title}>
			<TimelinePoint />
			<TimelineContent>
				<TimelineTime>{date}</TimelineTime>
				<TimelineTitle>{title}</TimelineTitle>
				<TimelineBody className="whitespace-pre-line">
					{summary}
				</TimelineBody>
				{children ?? null}
			</TimelineContent>
		</TimelineItem>
	);
};

Experiences.Drawer = (props: DrawerProps): JSX.Element => {
	const { header, items } = props;
	const [isOpen, setIsOpen] = useState(false);
	const handleShow = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);
	return (
		<>
			<Button onClick={handleShow}>Learn More</Button>
			<Drawer
				className="w-4/5 md:w-1/3"
				open={isOpen}
				onClose={handleClose}
				position="right"
			>
				<Drawer.Header title={header} titleIcon={() => <></>} />
				<Drawer.Items>{items}</Drawer.Items>
			</Drawer>
		</>
	);
};
