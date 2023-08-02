import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import AlertNoFound from "@/Components/Elements/AlertNotFound";
import FormSearch from "../Form/FormSearch";

import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import ConfirmDeleteModal from "../Modal/ConfirmDeleteModal";

const TernakTable = ({ allTernak, ternaks }) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const [openModal, setOpenModal] = useState(undefined); // Initialize openModal with undefined
    const props = { openModal, setOpenModal };

    const handleSearchInputChange = (e) => {
        const value = e.target.value;
        setSearchKeyword(value);
        setIsSearching(value !== "");
    };

    const filteredItems = isSearching
        ? allTernak.filter((item) => {
            const { nama } = item;
            const normalizedKeyword = searchKeyword.toLowerCase();
            return nama.toLowerCase().includes(normalizedKeyword);
        })
        : ternaks;

    return (
        <>
            <div className="flex justify-between">
                <div className="lg:mt-4">
                    <Link
                        href={route('dashboard.ternak.create')}
                        className="px-3 py-2 text-xs font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800"
                    >
                        Tambah Produk
                    </Link>
                </div>
                <div className="basis-1/2">
                    <FormSearch keyword={searchKeyword} onChange={handleSearchInputChange} />
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-sm text-gray-700 uppercase bg-white border-b-2 border-stone-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nama produk
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kode ring
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kode ternak
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.length ? (
                            filteredItems.map((item) => (
                                <tr key={item.id} className="bg-white">
                                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.nama}
                                    </th>
                                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.rings.kode}
                                    </th>
                                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.kode_ternak}
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="flex space-x-1">
                                            <Link
                                                method="get"
                                                href={route('dashboard.ternak.edit')}
                                                data={{ id: item.id }}
                                                className="px-4 py-2 lg:mr-2 text-xs font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    props.setOpenModal(
                                                        `pup-up${item.id}`
                                                    )
                                                }
                                                className="px-4 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                                                Hapus
                                            </button>
                                        </div>
                                        <ConfirmDeleteModal
                                            item={item}
                                            openModal={openModal}
                                            setOpenModal={setOpenModal}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white">
                                <td colSpan="4" className="text-center py-4 lg:px-36">
                                    <AlertNoFound />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TernakTable;
