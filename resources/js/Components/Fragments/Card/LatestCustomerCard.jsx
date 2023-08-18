import useStatusColor from "@/Components/Hooks/useStatusColor";

const LatestCustomerCard = ({ latestOrder }) => {
    return (
        <div className="w-full max-w-md p-4 bg-white shadow-soft-xl rounded-2xl bg-clip-border sm:p-8">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Order terbaru
                </h5>
                <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    Lainnya..
                </a>
            </div>
            <div className="flow-root">
                <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                    {latestOrder.map((item) => (
                        <li key={item.id} className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {item.users.name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        {item.ternak.nama}
                                    </p>
                                </div>
                                <div className={`text-sm ${useStatusColor(item.status)}`}>
                                    {item.status}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LatestCustomerCard;
