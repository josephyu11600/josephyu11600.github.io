'use client';

import {
	Button,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from 'flowbite-react';

type ExperienceModalProps = {
	header: string;
	body: string;
	shouldShowModal: boolean;
	setOpenModal: (openModalStatus: boolean) => void;
};
const ExperienceModal = (modalProps: ExperienceModalProps) => {
	const { header, body, shouldShowModal, setOpenModal } = modalProps;

	return (
		<Modal
			dismissible
			show={shouldShowModal}
			onClose={() => {
				setOpenModal(false);
			}}
		>
			<ModalHeader>{header}</ModalHeader>
			<ModalBody>{body}</ModalBody>
			<ModalFooter>
				<Button color="gray" onClick={() => setOpenModal(false)}>
					Close
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default ExperienceModal;
