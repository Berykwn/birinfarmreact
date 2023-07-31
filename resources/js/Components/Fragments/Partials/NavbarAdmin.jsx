import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "@inertiajs/react";

const NavbarAdminHeader = ({ auth }) => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center">
                    <img
                        src="img/loader.png"
                        className="h-8 mr-3"
                        alt="birinfarmlogo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Birinfarm.
                    </span>
                </a>
                <div className="flex items-center">
                    <Dropdown inline label={auth.user.name}>
                        <Dropdown.Item>
                            <Link
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log out
                            </Link>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
};

const navbarAdminLinks = [
    { url: "dashboard", label: "Dashboard" },
    { url: "pesanan", label: "Pesanan" },
];

const NavbarAdminMenu = ({ pages, children, url }) => (
    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-md">
        <li
            className={`text-slate-700 ${
                pages === url ? "border-b-4 border-lime-600 hover:border-0" : ""
            }`}
        >
            <Link href={route(url)}>{children}</Link>
        </li>
    </ul>
);

const NavbarAdmin = ({ auth, pages }) => {
    return (
        <>
            <NavbarAdminHeader auth={auth} />
            <nav className="bg-stone-100 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        {navbarAdminLinks.map(({ url, label }) => (
                            <NavbarAdminMenu key={url} url={url} pages={pages}>
                                {label}
                            </NavbarAdminMenu>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarAdmin;
