import { Link } from "@inertiajs/react";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = ({ title, pages, url }) => (
    <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <Link
                    href={route("dashboard")} // Assuming route function is defined somewhere
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                    <MdHome style={{ fontSize: "1.2rem" }} />
                    Dashboard
                </Link>
            </li>
            <li>
                <div className="flex items-center">
                    <MdKeyboardArrowRight />
                    <Link
                        href={route(url)} // Assuming route function is defined somewhere
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                        {pages}
                    </Link>
                </div>
            </li>
            <li aria-current="page">
                <div className="flex items-center">
                    <MdKeyboardArrowRight />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                        {title}
                    </span>
                </div>
            </li>
        </ol>
    </nav>
);

export default Breadcrumb;
