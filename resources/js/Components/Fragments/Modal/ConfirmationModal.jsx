import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { router } from "@inertiajs/react";

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
            <Modal.Header>{item.ternak.nama}</Modal.Header>
            <Modal.Body>
                <div className="">
                    <h3 className="mb-5 text-lg font-normal text-gray-500">
                        <form onSubmit={handleSubmit}>
                            <label
                                htmlFor="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Ubah status pesanan
                            </label>
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
                            <div className="flex justify-end gap-4 mt-4">
                                <button type="submit">Konfirmasi</button>
                            </div>
                        </form>
                    </h3>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmationModal;
