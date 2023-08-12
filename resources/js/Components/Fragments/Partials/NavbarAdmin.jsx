import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "@inertiajs/react";
import Icon from "@/Components/Elements/Icon";
import { MdDensitySmall } from "react-icons/md";

const linkList = [
    { url: "dashboard", label: "Dashboard" },
    { url: "dashboard.pesanan", label: "Pesanan" },
    { url: "dashboard.ternak", label: "Ternak" },
];

const NavbarAdmin = ({ auth, pages, handleSidebarToggle }) => {
    return (
        <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <button
                onClick={handleSidebarToggle}
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
                <MdDensitySmall style={{ fontSize: "1.5rem" }} />
            </button>
            <div className="flex items-center lg:px-8 md:px-6 px-4">
                <Dropdown inline label={auth.user.name}>
                    <Dropdown.Item>
                        <Link method="post" href={route("logout")} as="button">
                            Log out
                        </Link>
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </nav>
    );
};

export default NavbarAdmin;
