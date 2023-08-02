import React from "react";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-stone-100">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between mt-8">
                    <div className="mb-6 md:mb-0">
                        <Link
                            href="https://flowbite.com/"
                            className="flex items-center"
                        >
                            <img
                                src="img/logo.png"
                                className="h-16 mr-3"
                                alt="FlowBite Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Aliansi
                            </h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://flowbite.com/"
                                        className="hover:underline"
                                    >
                                        santara.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Follow us
                            </h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link
                                        href="https://github.com/themesberg/flowbite"
                                        className="hover:underline"
                                    >
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="https://discord.gg/4eeurUVvTy"
                                        className="hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023{" "}
                        <a
                            href="/"
                            className="hover:underline"
                        >
                            Birinfarm™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
