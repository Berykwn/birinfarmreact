import React from "react";

const Header = ({ image }) => {
    return (
        <div className="relative flex-shrink-0 h-48 w-full">
            <img
                className="absolute object-cover h-full w-full rounded-t-md"
                src={`storage/img/ternaks/${image}`}
                alt={image}
            />
        </div>
    );
};

const Body = ({ judul, deskripsi, updated_at, author }) => {
    return (
        <div className="p-5">
            <a href="#">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">
                    {judul}
                </h5>
            </a>
            <div className="flex items-center text-xs">
                <time className="text-neutral-400">{updated_at}</time>
                <span className="text-neutral-400">{author}</span>
            </div>
            <p className="mb-3 mt-3 font-normal text-gray-700">{deskripsi}</p>
        </div>
    );
};

const CardArtikel = ({ children }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            {children}
        </div>
    );
};

CardArtikel.Header = Header;
CardArtikel.Body = Body;

export default CardArtikel;
