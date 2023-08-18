import React, { useState } from "react";
import { Link } from "@inertiajs/react";

import AlertNotFound from "@/Components/Elements/Alert/AlertNotFound";
import ConfirmDeleteModal from "../Modal/ConfirmDeleteModal";

const Header = () => (
    <thead className="text-sm bg-gray-100">
        <tr>
            <th className="px-6 py-3">Nama Produk</th>
            <th className="px-6 py-3">Kode ring</th>
            <th className="px-6 py-3">Kode produk</th>
            <th className="px-6 py-3">Jumlah Jantan</th>
            <th className="px-6 py-3">Jumlah Betina</th>
            <th className="px-6 py-3">Action</th>
        </tr>
    </thead>
);

const Body = ({id, nama, kode_ring, kode_ternak, jumlah_jantan, jumlah_betina}) => {
    const [openModal, setOpenModal] = useState(undefined);

    return (
        <tbody>
            <tr key={id} className="bg-white">
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {nama}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {kode_ring}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {kode_ternak}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {jumlah_jantan}
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {jumlah_betina}
                </th>
                <td className="px-6 py-4">
                    <div className="flex space-x-1">
                        <Link
                            method="get"
                            href={route("dashboard.ternak.edit")}
                            data={{ id: id }}
                            className="px-3 py-2 text-xs font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={() => setOpenModal(`pup-up${id}`)}
                            className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
                        >
                            Hapus
                        </button>
                    </div>
                    <ConfirmDeleteModal
                        id={id}
                        nama={nama}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                    />
                </td>
            </tr>
        </tbody>
    );
};

const NotFound = () => (
    <tbody className="bg-white">
        <tr className="bg-white dark:bg-gray-800">
            <td colSpan="5" className="text-center py-4 lg:px-36">
                <AlertNotFound>Data ternak tidak ditemukan!!</AlertNotFound>
            </td>
        </tr>
    </tbody>
);

const TernakTable = ({ children }) => {
    return (
        <div className="relative overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-500">
                {children}
            </table>
        </div>
    );
};

TernakTable.Header = Header;
TernakTable.Body = Body;
TernakTable.NotFound = NotFound;

export default TernakTable;
