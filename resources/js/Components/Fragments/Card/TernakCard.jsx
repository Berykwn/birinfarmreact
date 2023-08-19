import React from "react";
import Icon from "@/Components/Elements/Icon";
import FormattedDate from "@/Hooks/useDateFormat";
import { Link } from "@inertiajs/react";

const TernakCard = (props) => {
    const { id, foto, deskripsi, nama, kode_ternak, updated_at } = props;
    const formattedDeskripsi =
        deskripsi.length > 100 ? deskripsi.slice(0, 100) + "..." : deskripsi;
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="relative flex-shrink-0 h-48 w-full">
                <img
                    className="absolute object-cover h-full w-full rounded-t-md"
                    src={`storage/img/ternaks/${foto}`}
                    alt={foto}
                />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900">
                        {kode_ternak} - {nama}
                    </h5>
                </a>
                <div className="flex items-center text-xs">
                    <time className="text-neutral-400">
                        <FormattedDate date={updated_at} />
                    </time>
                </div>
                <p className="mb-3 mt-3 font-normal text-gray-700 ">
                    {formattedDeskripsi}
                </p>
                <Link
                    href={route("ternak.detail")}
                    data={{ id: id }}
                    method="get"
                    className="inline-flex items-center font-medium text-lime-600 hover:underline"
                >
                    Lihat selengkapnya
                    <Icon iconName="right-arrow" />
                </Link>
            </div>
        </div>
    );
};

export default TernakCard;
