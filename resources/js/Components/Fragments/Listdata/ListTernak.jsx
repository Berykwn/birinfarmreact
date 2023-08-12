import React, { useState } from "react";
import TernakCard from "../Card/TernakCard";
import SearchInput from "@/Components/Elements/Input/SearchInput";
import AlertNoFound from "@/Components/Elements/Alert/AlertNotFound";

const ListTernak = ({ ternaks, allTernak }) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchKeyword(value);
        setIsSearching(value !== "");
    };

    const filteredTernaks = isSearching
        ? allTernak.filter((ternaks) => {
            const { nama } = ternaks;
            const normalizedKeyword = searchKeyword.toLowerCase();
            return nama.toLowerCase().includes(normalizedKeyword);
        })
        : ternaks;

    return (
        <>
            <div className="bg-white mb-8 max-w-4xl">
                <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2">
                    Produk ternak BirinFarm
                </h1>
                <p className="text-lg font-normal text-gray-500 mb-6">
                    "BirinFarm memiliki beragam produk ternak yang unggul,
                    dihasilkan dengan standar kualitas tinggi dan tekad kuat untuk
                    memenuhi kebutuhan pasar."
                </p>
                <SearchInput keyword={searchKeyword} onChange={handleSearchInputChange} size={'lg:w-1/2'} />
            </div>
            {filteredTernaks.length > 0 ? (
                <div className="mx-auto max-w-full py-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredTernaks.map((item) => (
                            <TernakCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            ) : (
                <><AlertNoFound /></>
            )}
        </>
    );
};

export default ListTernak;
