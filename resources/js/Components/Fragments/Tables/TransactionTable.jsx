import FormattedDate from "@/Components/Elements/FormatedDate";
import { Link } from "@inertiajs/react";

const TransactionTable = ({ transaction }) => {
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {transaction.map((item) => (
                    <tr
                        key={item.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.ternak.nama}
                        </td>
                        <td className="px-6 py-4">
                            <FormattedDate date={item.created_at} />
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
                            <div
                                className="inline-flex rounded-md shadow-sm"
                                role="group"
                            >
                                <Link
                                    href={route("cetakNota")}
                                    data={{ id: item.id }}
                                    method="get"
                                    className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Cetak
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
