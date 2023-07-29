("use client");

import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "@inertiajs/react";


const TopNavbar = ({ auth }) => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl lg:px-0 px-4 py-4">
                <Link href="/" className="flex items-center">
                    <img
                        src="img/loader.png"
                        className="h-10 mr-3"
                        alt="Aplication Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Birinfarm.
                    </span>
                </Link>
                <div className="flex items-center">
                    <Link
                        href="tel:5541251234"
                        className="mr-6 text-sm text-gray-500 dark:text-white hover:underline"
                    >
                        (555) 412-1234
                    </Link>
                    {!auth.user && (
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
                    )}

                    {auth.user && (
                        <Dropdown inline label={auth.user.name}>
                            <Dropdown.Item>
                                <Link href={route("transaksi")}>
                                    Pesanan saya
                                </Link>
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
};

const NavbarMenu = ({ pages }) => {
    return (
        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-md">
            <li
                className={`text-slate-700 ${
                    pages === "Home"
                        ? "border-b-4 border-lime-600 hover:border-0"
                        : ""
                }`}
            >
                <Link href={route("home")}>Beranda</Link>
            </li>
            <li
                className={`text-slate-700 ${
                    pages === "Ternak"
                        ? "border-b-4 border-lime-600 hover:border-0"
                        : ""
                }`}
            >
                <Link href={route("ternak")}>Produk</Link>
            </li>
            <li
                className={`text-slate-700 ${
                    pages === "Pemesanan"
                        ? "border-b-4 border-lime-600 hover:border-0"
                        : ""
                }`}
            >
                <Link href={route("pemesanan")}>Pemesanan</Link>
            </li>
            <li>
                <Link
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                >
                    Artikel
                </Link>
            </li>
            <li>
                <Link
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                >
                    Galeri
                </Link>
            </li>
            <li>
                <Link
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                >
                    Tentang Kami
                </Link>
            </li>
        </ul>
    );
};

const Navbar = ({ pages, auth }) => {
    return (
        <>
            <TopNavbar auth={auth} />
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl lg:px-0 px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <NavbarMenu pages={pages} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
