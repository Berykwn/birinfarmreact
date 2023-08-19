import { Link } from "@inertiajs/react";

const PrimaryLink = ({ children, href }) => {
    return (
        <Link
            href={href}
            className="px-3 py-2 text-xs font-medium text-center text-white bg-green-600 rounded-md hover:bg-green-700"
        >
            {children}
        </Link>
    );
};

export default PrimaryLink;
