import { Dropdown } from "flowbite-react";
import { Link } from "@inertiajs/react";
import {
    MdDensitySmall,
    MdManageAccounts,
    MdNotifications,
} from "react-icons/md";

const NavbarAdmin = ({ handleSidebarToggle }) => {
    return (
        <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <button
                onClick={handleSidebarToggle}
                className="inline-flex border-2 border-gray-100 items-center py-2 mt-2 ml-3 text-sm text-gray-400 rounded-lg"
                style={{ pointerEvents: "auto" }} // Allow interactions with the button
            >
                <MdDensitySmall style={{ fontSize: "1.5rem" }} />
            </button>

            <div className="flex items-center lg:px-8 md:px-6 px-4 gap-2">
                <MdNotifications style={{ fontSize: "1.5rem" }} />
                <Dropdown
                    inline
                    label={<MdManageAccounts style={{ fontSize: "1.5rem" }} />}
                >
                    <Dropdown.Item>
                        <Link method="post" href={route("logout")} as="button">
                            Log out
                        </Link>
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </nav>
    );
};

export default NavbarAdmin;
