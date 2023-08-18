import Sidebar from "@/Components/Fragments/Partials/Sidebar";
import Breadcrumb from "@/Components/Fragments/Breadcrumb";
import Notification from "@/Components/Elements/Alert/Notification";
import { useSidebarOpen } from "@/Components/Hooks/useSidebarOpen";
import { Head, Link } from "@inertiajs/react";
import { Dropdown } from "flowbite-react";
import { MdDensitySmall, MdNotifications } from "react-icons/md";

const AdminLayout = (props) => {
    const { pages, children, flash, auth } = props;
    const { isSidebarOpen, handleSidebarToggle } = useSidebarOpen(); // Sidebar terbuka secara default

    const backgroundOpacityClass = isSidebarOpen
        ? "bg-gray-100"
        : "bg-slate-950 opacity-10 lg:opacity-100 md:opacity-100";

    return (
        <div className={`bg-gray-100 ${isSidebarOpen ? "" : "ml-80"}`}>
            {flash && <Notification flash={flash} />}

            <Head title={pages.title} />

            <Sidebar pages={pages} className={`${isSidebarOpen && "hidden"}`} />

            <nav className="flex justify-stretch lg:justify-between md:justify-between items-center mx-auto max-w-screen-xl p-4">
                <button
                    onClick={handleSidebarToggle}
                    className="py-2 mt-2 ml-3 mr-3 text-black"
                >
                    <MdDensitySmall className="text-xl" />
                </button>
                <div className="flex items-center gap-2 px-3 py-2 mt-2 mr-4">
                    <MdNotifications className="text-xl" />
                    <Dropdown
                        inline
                        label={
                            <span className="text-sm font-semibold text-neutral-500">
                                {auth.user.name}
                            </span>
                        }
                    >
                        <Link
                            method="post"
                            href={route("logout")}
                            as="button"
                            className="w-full"
                        >
                            <Dropdown.Item>Log out</Dropdown.Item>
                        </Link>
                    </Dropdown>
                </div>
            </nav>
            <div
                className={`lg:bg-gray-100 md:bg-gray-100 ${backgroundOpacityClass}`}
            >
                <div className="px-8 mb-4">
                    <Breadcrumb pages={pages} />
                </div>

                <main className="px-8">{children}</main>

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
    );
};

export default AdminLayout;
