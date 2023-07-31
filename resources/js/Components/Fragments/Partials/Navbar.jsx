import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "@inertiajs/react";

const NavbarHeader = ({ auth }) => (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl lg:px-0 px-4 py-4">
            <Link href="/" className="flex items-center">
                <img
                    src="img/loader.png"
                    className="h-10 mr-3"
                    alt="Application Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Birinfarm.
                </span>
            </Link>
            <div className="flex items-center">
                <span className="mr-6 text-sm text-gray-500 dark:text-white hover:underline">
                    birinfarm.com
                </span>
                {!auth.user ? (
                    <div
                        className="inline-flex rounded-md shadow-sm"
                        role="group"
                    >
                        <Link
                            href={route("login")}
                            className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600"
                        >
                            Login
                        </Link>
                        <Link
                            href={route("register")}
                            className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600"
                        >
                            Register
                        </Link>
                    </div>
                ) : (
                    <Dropdown inline label={auth.user.name}>
                        <Dropdown.Item>
                            <Link href={route("transaksi")}>Pesanan saya</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link href={route("profile.edit")}>
                                Edit profile
                            </Link>
                        </Dropdown.Item>
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
                )}
            </div>
        </div>
    </nav>
);

const navbarLinks = [
    { url: "home", label: "Home" },
    { url: "ternak", label: "Ternak" },
    { url: "pemesanan", label: "Pemesanan" },
    // { url: "artikel", label: "Artikel" },
    // { url: "galeri", label: "Galeri" },
    // { url: "tentang-kami", label: "Tentang kami" },
];

const NavbarLink = ({ pages, children, url }) => (
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

const Navbar = ({ pages, auth }) => (
    <>
        <NavbarHeader auth={auth} />
        <nav className="bg-stone-100 dark:bg-gray-700">
            <div className="max-w-screen-xl lg:px-0 px-4 py-3 mx-auto text-md">
                <div className="flex items-center">
                    {navbarLinks.map(({ url, label }) => (
                        <NavbarLink key={url} url={url} pages={pages}>
                            {label}
                        </NavbarLink>
                    ))}
                </div>
            </div>
        </nav>
    </>
);

export default Navbar;
