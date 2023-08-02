import React, { useState } from "react";
import TernakCard from "../Card/TernakCard";
import Icon from "@/Components/Elements/Icon";
import { Link } from "@inertiajs/react";

const ListTernakHeader = ({ handleSearch }) => {
    return (
        <div className="bg-stone-100 border border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <Link
                href="#"
                className="bg-slate-100 text-lime-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
            >
                <Icon iconName={"camera"} />
                Tutorial
            </Link>
            <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2">
                Produk ternak BirinFarm
            </h1>
            <p className="text-lg font-normal text-gray-500 mb-6">
                "BirinFarm memiliki beragam produk ternak yang unggul,
                dihasilkan dengan standar kualitas tinggi dan tekad kuat untuk
                memenuhi kebutuhan pasar."
            </p>
            <form>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Icon iconName={"search"} />
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-lime-50 focus:border-lime-500"
                        placeholder="Cari Produk birinfarm..."
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

const ListTernak = ({ ternaks }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredTernaks = ternaks.filter((item) =>
        item.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <ListTernakHeader handleSearch={handleSearch} />
            {filteredTernaks.length === 0 ? (
                <div
                    className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                    role="alert"
                >
                    <Icon iconName={"alert"} />
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Ra dodol!!</span> silahkan
                        cari kata kunci yang lain
                    </div>
                </div>
            ) : (
                <div className="mx-auto max-w-full py-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredTernaks.map((item) => (
                            <TernakCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ListTernak;
