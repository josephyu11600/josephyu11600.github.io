'use client';

import { useCallback, useEffect, useRef } from 'react';
import { Modal } from 'react-daisyui';
import PortfolioButton from './PortfolioButton';

type ExperienceModalProps = {
	header: string;
	body: string;
	shouldShowModal: boolean;
	setOpenModal: (openModalStatus: boolean) => void;
};
const ExperienceModal = (modalProps: ExperienceModalProps) => {
	const { header, body, shouldShowModal, setOpenModal } = modalProps;
	const ref = useRef<HTMLDialogElement>(null);
	const handleShow = useCallback(() => {
		ref.current?.showModal();
	}, [ref]);

	return (
		<>
			<PortfolioButton text="Learn More" onClick={handleShow} />
			<Modal backdrop onClick={handleShow} ref={ref}>
				<Modal.Header>{header}</Modal.Header>
				<Modal.Body>{body}</Modal.Body>
			</Modal>
		</>
	);
};

export default ExperienceModal;
