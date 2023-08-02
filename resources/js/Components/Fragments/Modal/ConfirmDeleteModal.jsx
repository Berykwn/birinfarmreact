import React from "react";
import { Modal, Button } from "flowbite-react";
import { router } from "@inertiajs/react";

const ConfirmDeleteModal = ({ item, openModal, setOpenModal }) => {
    return (
        <Modal
            show={openModal === `pup-up${item.id}`}
            size="md"
            data-pup-up
            onClose={() => setOpenModal(undefined)} 
        >
            <Modal.Header>
                {item.nama}
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <h3 className="mb-5 text-lg font-normal text-gray-500">
                        Apakah anda yakin akan menghapus{" "}
                        <span className="font-semibold">
                            {item.nama} 
                        </span> ?
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button
                            color="failure"
                            onClick={() => {
                                router.post(`/dashboard/ternak/delete/${item.id}`);
                                setOpenModal(undefined);
                            }}
                        >
                            Ya
                        </Button>
                        <Button
                            color="gray"
                            onClick={() => setOpenModal(undefined)}
                        >
                            Tidak
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmDeleteModal;
