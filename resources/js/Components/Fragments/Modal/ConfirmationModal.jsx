import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

const ConfirmationModal = ({ item, openModal, setOpenModal }) => {
    const [values, setValues] = useState({
        status: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post(`/dashboard/pesanan/confirm/${item.id}`, values);
        setOpenModal(undefined);
    }

    return (
        <Modal
            show={openModal === `pup-up${item.id}`}
            size="md"
            data-pup-up
            onClose={() => setOpenModal(undefined)}
        >
            <Modal.Body>
                <div className="px-2 py-2">
                    <div
                        className="p-4 mb-4 text-sm text-neutral-800 rounded-lg bg-sky-100 shadow"
                        role="alert"
                    >
                        <span className="font-bold">Perhatian!</span> Anda akan
                        mengubah status pesanan:{" "}
                        <span className="font-bold">{item.ternak.nama} - {item.users.name}</span> ?
                    </div>

                    <h3 className=" text-lg font-normal text-gray-500">
                        <form onSubmit={handleSubmit}>
                            <select
                                id="status"
                                value={values.status}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                                <option value="Ditolak">Ditolak</option>
                                <option value="Pending">Pending</option>
                                <option value="Diterima">Diterima</option>
                                <option value="Dikirim">Dikirim</option>
                                <option value="Success">Success</option>
                            </select>
                            <div className="flex justify-center gap-2 mt-4">
                                <PrimaryButton type="submit">Oke</PrimaryButton>
                                <SecondaryButton
                                    onClick={() => setOpenModal(undefined)}
                                >
                                    cancel
                                </SecondaryButton>
                            </div>
                        </form>
                    </h3>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmationModal;
