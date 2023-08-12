import { Link } from '@inertiajs/react';
import React from 'react';
import { MdDashboard, MdStorefront, MdOutlineWarehouse, MdArticle, MdOutlineAspectRatio, MdManageAccounts, MdLogout } from "react-icons/md";

const sidebarListMenu = [
  { name: 'Dashboard', routeName: 'dashboard', icon: <MdDashboard style={{ fontSize: "1.5rem" }} /> },
  { name: 'Pesanan', routeName: 'dashboard.pesanan', icon: <MdStorefront style={{ fontSize: "1.5rem" }} /> },
  { name: 'Ternak', routeName: 'dashboard.ternak', icon: <MdOutlineWarehouse style={{ fontSize: "1.5rem" }} /> },
  { name: 'Artikel', routeName: 'dashboard', icon: <MdArticle style={{ fontSize: "1.5rem" }} /> },
  { name: 'Galeri', routeName: 'dashboard', icon: <MdOutlineAspectRatio style={{ fontSize: "1.5rem" }} /> },
  { name: 'Profile', routeName: 'dashboard', icon: <MdManageAccounts style={{ fontSize: "1.5rem" }} /> },
];

const Sidebar = ({ pages }) => {
  return (
    <aside
      className="fixed inset-y-0 left-0 w-80 shadow-xl flex flex-col"
    >
      <ul className="md:w-full flex-grow">
        <li className='flex pt-8 pb-4 justify-center gap-1'>
          <img
            src="http://127.0.0.1:8000/img/logo.png"
            alt="logo"
            className="h-14"
          />
        </li>
        {sidebarListMenu.map((page, index) => (
          <li key={index} className="px-4">
            <Link
              href={route(page.routeName)}
              className={`flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100 
              ${pages === page.name && 'bg-gray-200 my-1'}`}
            >
              {page.icon}
              <span className="ml-3">{page.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="#"
        className="flex items-center justify-center mt-4 mb-4 mx-4 px-2 py-2 bg-gray-200 hover:bg-gray-100 rounded-md tracking-wide"
      >
        <MdLogout style={{ fontSize: "1.5rem" }} />
        <span className="ml-3">Logout</span>
      </Link>
    </aside>
  );
}

export default Sidebar;
