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
        method: "GET"
    },
    {
        name: "Pesanan",
        routeName: "dashboard.pesanan",
        icon: MdStorefront,
        label: "Pesanan",
        method: "GET"
    },
    {
        name: "Ternak",
        routeName: "dashboard.ternak",
        icon: MdOutlineWarehouse,
        label: "Produk ternak",
        method: "GET"
    },
    {
        name: "Artikel",
        routeName: "dashboard",
        icon: MdArticle,
        label: "Artikel",
        method: "GET"
    },
    {
        name: "Galeri",
        routeName: "dashboard",
        icon: MdOutlineAspectRatio,
        label: "Galeri",
        method: "GET"
    },
    {
        name: "Profile",
        routeName: "dashboard",
        icon: MdManageAccounts,
        label: "Kelola akun",
        method: "GET"
    },
    {
        name: "Log out",
        routeName: "logout",
        icon: MdLogout,
        label: "Log out",
        method: "POST"
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
                                method={page.method}
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
            </aside>
        </div>
    );
};

export default Sidebar;
