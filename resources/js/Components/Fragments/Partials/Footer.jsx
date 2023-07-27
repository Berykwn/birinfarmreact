import React from "react";
import Icon from "@/Components/Elements/Icon";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-90">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between mt-8">
                    <div className="mb-6 md:mb-0">
                        <Link
                            href="https://flowbite.com/"
                            className="flex items-center"
                        >
                            <img
                                src="img/logo.png"
                                className="h-20 mr-3"
                                alt="FlowBite Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Resources
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://flowbite.com/"
                                        className="hover:underline"
                                    >
                                        Flowbite
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tailwindcss.com/"
                                        className="hover:underline"
                                    >
                                        Tailwind CSS
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Follow us
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        href="https://github.com/themesberg/flowbite"
                                        className="hover:underline "
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
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Flowbite™
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <Icon iconName={"facebook"} />
                            <span className="sr-only">Facebook page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
