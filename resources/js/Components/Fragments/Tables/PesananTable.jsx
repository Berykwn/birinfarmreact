import React, { useState } from "react";
import FormattedDate from "@/Components/Elements/FormattedDate";
import StatusColor from "@/Components/Hooks/useStatusColor";
import AlertNotFound from "@/Components/Elements/Alert/AlertNotFound";
import ConfirmationModal from "../Modal/ConfirmationModal";

const Header = () => (
    <thead className="text-sm bg-gray-100">
        <tr>
            <th className="px-6 py-3">Nama Produk</th>
            <th className="px-6 py-3">Nama pemesan</th>
            <th className="px-6 py-3">Tanggal pemesanan</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Action</th>
        </tr>
    </thead>
);

const Body = ({ id, ternak, users, created_at, status }) => {
    const [openModal, setOpenModal] = useState(undefined);
    return (
        <tbody className="bg-white">
            <tr>
                <th scope="row" className="px-6 py-4">
                    {ternak.nama}
                </th>
                <td scope="row" className="px-6 py-4">
                    {users.name}
                </td>
                <td className="px-6 py-4">
                    <FormattedDate date={created_at} />
                </td>
                <td className={`px-6 py-4 ${StatusColor(status)}`}>{status}</td>
                <td className="px-6 py-4">
                    <button
                        className="px-3 py-2 text-xs font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300"
                        onClick={() => setOpenModal(`pup-up${id}`)}
                        disabled={status === "Success"}
                    >
                        Konfirmasi
                    </button>
                    <ConfirmationModal
                        id={id}
                        ternak={ternak}
                        users={users}
                        created_at={created_at}
                        status={status}
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
                <AlertNotFound>Data pesanan tidak ditemukan!!</AlertNotFound>
            </td>
        </tr>
    </tbody>
);
 
const PesananTable = ({ children }) => {
    return (
        <div className="relative overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-500">
                {children}
            </table>
        </div>
    );
};

PesananTable.Header = Header;
PesananTable.Body = Body;
PesananTable.NotFound = NotFound;

export default PesananTable;
