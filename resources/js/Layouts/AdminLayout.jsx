import Footer from "@/Components/Fragments/Partials/Footer";
import NavbarAdmin from "@/Components/Fragments/Partials/NavbarAdmin";
import { Head } from "@inertiajs/react";

export default function AdminLayout(props) {
    const { title, pages, children, auth } = props;
    return (
        <div>
            <Head title={title} />
            <div className="">
                <NavbarAdmin pages={pages} auth={auth} />
            </div>

            <main>{children}</main>

            <footer className=" dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a
                            href="http://127.0.0.1:8000/img/loader.png" 
                            className="flex items-center mb-4 sm:mb-0"
                        >
                            <img
                                src="http://127.0.0.1:8000/img/logo.png"
                                className="h-14 mr-3"
                                alt="Flowbite Logo"
                            />
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="mr-4 hover:underline md:mr-6 "
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="mr-4 hover:underline md:mr-6"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="mr-4 hover:underline md:mr-6 "
                                >
                                    Licensing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Flowbite™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
}
