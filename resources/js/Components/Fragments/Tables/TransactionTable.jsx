import FormattedDate from "@/Components/Elements/FormattedDate";
import StatusColor from "@/Components/Hooks/useStatusColor";
import { Link } from "@inertiajs/react";

const TransactionTable = ({ transaction }) => {
    const tableHeadList = ['Nama produk', 'Tanggal pemesanan', 'Status', 'Action',]

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                    {tableHeadList.map((item) => (
                        <th key={item} scope="col" className="px-6 py-3">
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {transaction.map((item) => (
                    <tr
                        key={item.id}
                        className="bg-white border-b "
                    >
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {item.ternak.nama}
                        </td>
                        <td className="px-6 py-4">
                            <FormattedDate date={item.created_at} />
                        </td>
                        <td
                            className={`px-6 py-4 ${StatusColor(item.status)}`}
                        >
                            {item.status}
                        </td>
                        <td className="px-6 py-4">
                            <Link
                                href={route("cetakNota")}
                                data={{ id: item.id }}
                                method="get"
                                className="px-3 py-2 mr-2 lg:mb-2 text-xs font-medium text-center inline-flex items-center text-white bg-cyan-700 hover:bg-cyan-800 rounded-md"
                            >
                                Cetak
                            </Link>
                            <Link
                                href={route("cetakNota")}
                                data={{ id: item.id }}
                                method="get"
                                className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-lime-700 hover:bg-lime-800 rounded-md"
                            >
                                Pembayaran
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
