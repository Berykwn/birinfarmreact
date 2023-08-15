import { Link } from "@inertiajs/react";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = ({ pages }) => (
    <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <Link
                    href={route("dashboard")} // Assuming route function is defined somewhere
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-400"
                >
                    <MdHome style={{ fontSize: "1.2rem" }} />
                    Dashboard
                </Link>
            </li>
            <li>
                <div className="flex items-center">
                    <MdKeyboardArrowRight />
                    <Link
                        href={route(pages.url)} // Assuming route function is defined somewhere
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-400 md:ml-2"
                    >
                        {pages.name}
                    </Link>
                </div>
            </li>
            <li aria-current="page">
                <div className="flex items-center">
                    <MdKeyboardArrowRight />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                        {pages.title}
                    </span>
                </div>
            </li>
        </ol>
    </nav>
);

export default Breadcrumb;
