import React from "react";
import { Modal, Button } from "flowbite-react";
import { router } from "@inertiajs/react"; 
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";

const ConfirmDeleteModal = ({ id, nama, openModal, setOpenModal }) => {
    return (
        <Modal
            show={openModal === `pup-up${id}`}
            size="md"
            data-pup-up
            onClose={() => setOpenModal(undefined)} 
        >
            <Modal.Body>
                <div className="text-center px-4 py-4">
                    <h3 className="mb-5 text-lg font-normal text-gray-500">
                        Apakah anda yakin akan menghapus data {" "}
                        <span className="font-semibold">
                            {nama} 
                        </span> ?
                    </h3>
                    <div className="flex justify-center gap-4">
                        <DangerButton
                            color="failure"
                            onClick={() => {
                                router.post(`/dashboard/ternak/delete/${id}`);
                                setOpenModal(undefined);
                            }}
                        >
                            Ya
                        </DangerButton>
                        <SecondaryButton
                            color="gray"
                            onClick={() => setOpenModal(undefined)}
                        >
                            Tidak
                        </SecondaryButton>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmDeleteModal;
