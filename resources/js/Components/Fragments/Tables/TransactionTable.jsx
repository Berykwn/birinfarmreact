import FormattedDate from "@/Components/Elements/FormattedDate";
import StatusColor from "@/Components/Elements/StatusColor";
import { Link } from "@inertiajs/react";

const TransactionTable = ({ transaction }) => {
    
    const tableHeadList = [
        'Nama produk',
        'Tanggal pemesanan',
        'Status',
        'Action'
    ]

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                                className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
                            >
                                Cetak
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
