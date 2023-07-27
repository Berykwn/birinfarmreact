import { Link } from "@inertiajs/react";
import React from "react";

const TopNavbar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl lg:px-0 px-4 py-4">
                <Link href="https://flowbite.com" className="flex items-center">
                    <img
                        src="img/loader.png"
                        className="h-10 mr-3"
                        alt="Aplication Logo"
                    />
                    <span className="font-[] self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Birinfarm
                    </span>
                </Link>
                <div className="flex items-center">
                    <Link
                        href="tel:5541251234"
                        className="mr-6 text-sm text-gray-500 dark:text-white hover:underline"
                    >
                        (555) 412-1234
                    </Link>
                    {/* <Link
                        href="#"
                        className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Login
                    </Link> */}
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

const Navbar = ({ pages }) => {
    return (
        <>
            <TopNavbar />
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
