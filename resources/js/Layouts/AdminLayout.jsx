import React, { useState, useEffect } from "react";
import Sidebar from "@/Components/Fragments/Partials/Sidebar";
import { Head } from "@inertiajs/react";
import NavbarAdmin from "@/Components/Fragments/Partials/NavbarAdmin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => (
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
)

export default function AdminLayout(props) {
    const { title, pages, children, auth, flash } = props;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        flash && toast.success(flash);
    }, [flash]);

    return (
        <div className="flex flex-col min-h-screen">
            <Head title={title} />
            {flash && (<Notification />)}
            <div className="flex flex-grow">
                <div
                    className={`w-80 flex-shrink-0 ${isSidebarOpen && "hidden "
                        }`}
                >
                    <Sidebar pages={pages} />
                </div>
                <div
                    className={`w-full  ${isSidebarOpen
                        ? "bg-gray-100"
                        : "lg:bg-gray-100 lg:opacity-100 bg-gray-500 opacity-70"
                        }`}
                >
                    <NavbarAdmin
                        pages={pages}
                        auth={auth}
                        handleSidebarToggle={handleSidebarToggle}
                    />
                    <div
                        className={`${isSidebarOpen
                            ? "flex flex-col"
                            : "hidden lg:flex lg:flex-col"
                            }`}
                    >
                        <main>{children}</main>
                        <div className="flex justify-center py-4 px-8 mt-8">
                            <span className="text-sm text-gray-500 sm:text-center">
                                © 2023{" "}
                                <a href="/" className="hover:underline">
                                    Birinfarm™
                                </a>
                                . All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
