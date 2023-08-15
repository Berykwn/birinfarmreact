import Logo from "@/Components/Elements/Logo/Logo";
import { Link } from "@inertiajs/react";
import React from "react";
import {
    MdDashboard,
    MdStorefront,
    MdOutlineWarehouse,
    MdArticle,
    MdOutlineAspectRatio,
    MdManageAccounts,
    MdLogout,
} from "react-icons/md";

const sidebarListMenu = [
    {
        name: "Dashboard",
        routeName: "dashboard",
        icon: MdDashboard,
        label: "Dashboard",
    },
    {
        name: "Pesanan",
        routeName: "dashboard.pesanan",
        icon: MdStorefront,
        label: "Pesanan",
    },
    {
        name: "Ternak",
        routeName: "dashboard.ternak",
        icon: MdOutlineWarehouse,
        label: "Produk ternak",
    },
    {
        name: "Artikel",
        routeName: "dashboard",
        icon: MdArticle,
        label: "Artikel",
    },
    {
        name: "Galeri",
        routeName: "dashboard",
        icon: MdOutlineAspectRatio,
        label: "Galeri",
    },
    {
        name: "Profile",
        routeName: "dashboard",
        icon: MdManageAccounts,
        label: "Kelola akun",
    },
];

const Sidebar = ({ pages, className }) => {
    return (
        <div className={className}>
            <aside className="fixed inset-y-0 left-0 w-80 shadow-xl flex flex-col">
                <ul className="md:w-full flex-grow">
                    <li className="flex pt-8 pb-4 justify-center gap-1">
                        <Logo />
                    </li>
                    {sidebarListMenu.map((page, index) => (
                        <li key={index} className="px-4">
                            <Link
                                href={route(page.routeName)}
                                className={`flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100 ${
                                    pages.name === page.name &&
                                    "bg-gray-200 my-1"
                                }`}
                            >
                                <page.icon className="text-xl" />
                                <span className="ml-3">{page.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    href="#"
                    className="flex items-center justify-center mt-4 mb-4 mx-4 px-2 py-2 bg-gray-200 hover:bg-gray-100 rounded-md tracking-wide"
                >
                    <MdLogout className="text-xl" />
                    <span className="ml-3">Logout</span>
                </Link>
            </aside>
        </div>
    );
};

export default Sidebar;
