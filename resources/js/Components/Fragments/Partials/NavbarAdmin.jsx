import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "@inertiajs/react";

const linkList = [
    { url: 'dashboard', label: "Dashboard" },
    { url: 'dashboard.pesanan', label: "Pesanan" },
    { url: 'dashboard.ternak', label: "Ternak" },
];

const NavbarAdmin = ({ auth, pages }) => {
    return (
        <>
            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img
                            src="http://127.0.0.1:8000/img/loader.png"
                            className="w-8 h-8 mr-3"
                            alt="birinfarmlogo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">
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
            <nav className="bg-stone-100">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-md">
                            {linkList.map(({ url, label }) => (
                                <li
                                    key={url}
                                    className={`text-slate-700 ${pages === label ? "border-b-4 border-lime-700 hover:border-0" : ""
                                        }`}
                                >
                                    <Link href={route(url)}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};



export default NavbarAdmin;
