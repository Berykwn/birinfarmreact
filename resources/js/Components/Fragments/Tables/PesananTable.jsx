import React, { useState } from "react";
import ConfirmationModal from "../Modal/ConfirmationModal";
import FormattedDate from "@/Components/Elements/FormattedDate";
import AlertNoFound from "@/Components/Elements/AlertNotFound";
import FormSearch from "../Form/FormSearch";

const TableHeader = () => (
    <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-3">
                Nama produk
            </th>
            <th scope="col" className="px-6 py-3">
                Nama pemesan
            </th>
            <th scope="col" className="px-6 py-3">
                Tanggal pemesanan
            </th>
            <th scope="col" className="px-6 py-3">
                Status
            </th>
            <th scope="col" className="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
);


const PesananTable = ({ pesanans, allPesanan, getStatusClassName }) => {
    // Modal
    const [openModal, setOpenModal] = useState(undefined);
    const props = { openModal, setOpenModal };

    // Search
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchKeyword(value);
        setIsSearching(value !== "");
    };

    const filteredPesanans = isSearching
        ? allPesanan.filter((pesanans) => {
            const { ternak, users } = pesanans;
            const normalizedKeyword = searchKeyword.toLowerCase();
            return ternak.nama.toLowerCase().includes(normalizedKeyword);
        })
        : pesanans;
    
    return (
        <>
            <FormSearch keyword={searchKeyword} onChange={handleSearchInputChange} size={'lg:w-1/2'} />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHeader />
                    <tbody>
                        {filteredPesanans.length > 0 ? (
                            filteredPesanans.map((item) => (
                                <tr
                                    key={item.id}
                                    className="bg-white"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {item.ternak.nama}
                                    </th>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {item.users.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        <FormattedDate date={item.created_at} />
                                    </td>
                                    <td className={`px-6 py-4 ${getStatusClassName(item.status)}`}>
                                        {item.status}
                                    </td>

                                    <td className="px-6 py-4">
                                        <button
                                            className="px-3 py-2 text-xs font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300"
                                            onClick={() =>
                                                props.setOpenModal(
                                                    `pup-up${item.id}`
                                                )
                                            }
                                            disabled={item.status === "Success"}
                                        >
                                            Konfirmasi
                                        </button>
                                        <ConfirmationModal
                                            item={item}
                                            openModal={openModal}
                                            setOpenModal={setOpenModal}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white dark:bg-gray-800">
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

export default PesananTable;
