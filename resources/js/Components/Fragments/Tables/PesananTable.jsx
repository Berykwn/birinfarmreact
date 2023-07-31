import React, { useState } from "react";
import ConfirmationModal from "../Modal/ConfirmationModal";
import FormattedDate from "@/Components/Elements/FormattedDate";
import Icon from "@/Components/Elements/Icon";
import AlertNoFound from "@/Components/Elements/AlertNotFound";

const TableHeader = () => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nama produk
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
};

const PesananTable = ({ pesanans, allPesanan }) => {
    console.log(pesanans);
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
              const { ternak } = pesanans;
              const normalizedKeyword = searchKeyword.toLowerCase();
              return ternak.nama.toLowerCase().includes(normalizedKeyword);
          })
        : pesanans;

    return (
        <>
            <form>
                <div className="relative mb-2 w-1/2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Icon iconName={"search"} />
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-3 pl-10 text-sm text-gray-900 border border-stone-300 rounded-lg bg-stone-50 focus:ring-lime-900 focus:border-lime-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Cari Produk birinfarm..."
                        value={searchKeyword}
                        onChange={handleSearchInputChange}
                    />
                </div>
            </form>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHeader />
                    <tbody>
                        {filteredPesanans.length > 0 ? (
                            filteredPesanans.map((item) => (
                                <tr
                                    key={item.id}
                                    className="bg-white dark:bg-gray-800"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {item.ternak.nama}
                                    </th>
                                    <td className="px-6 py-4">
                                        <FormattedDate date={item.updated_at} />
                                    </td>
                                    <td
                                        className={`px-6 py-4 ${
                                            item.status === "Pending"
                                                ? "text-yellow-500"
                                                : item.status === "Success"
                                                ? "text-green-500"
                                                : item.status === "Ditolak"
                                                ? "text-red-500"
                                                : ""
                                        }`}
                                    >
                                        {item.status}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            className="px-3 py-2 text-xs font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
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
