const LatestCustomerCard = () => {
    return (
        <div className="w-full max-w-md p-4 bg-white shadow-soft-xl rounded-2xl bg-clip-border sm:p-8">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Latest Customers
                </h5>
                <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    View all
                </a>
            </div>
            <div className="flow-root">
                <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="/docs/images/people/profile-picture-1.jpg"
                                    alt="Neil image"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="/docs/images/people/profile-picture-1.jpg"
                                    alt="Neil image"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LatestCustomerCard;
