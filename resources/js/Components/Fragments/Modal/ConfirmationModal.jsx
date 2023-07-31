import React from "react";
import { Modal, Button } from "flowbite-react";
import { router } from "@inertiajs/react";

const ConfirmationModal = ({ item, openModal, setOpenModal }) => {
    return (
        <Modal
            show={openModal === `pup-up${item.id}`}
            size="md"
            data-pup-up
            onClose={() => setOpenModal(undefined)}
        >
            <Modal.Header>
                {item.ternak.nama}
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Apakah anda yakin akan mengkonfirmasi pesanan{" "}
                        <span className="font-semibold">
                            {item.ternak.nama}
                        </span>
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button
                            color="success"
                            onClick={() => {
                                router.post(`/confirmpesanan/${item.id}`);
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

export default ConfirmationModal;
