import FormattedDate from "@/Hooks/useDateFormat";
import React from "react";
import {
    MdStorefront,
    MdOutlineWarehouse,
    MdSupervisorAccount,
} from "react-icons/md";

const iconMap = {
    MdStorefront: MdStorefront,
    MdOutlineWarehouse: MdOutlineWarehouse,
    MdSupervisorAccount: MdSupervisorAccount,
};

const TotalDataCard = ({ totalData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -mx-3">
            {Object.keys(totalData).map((key) => (
                <div key={key} className="px-3">
                    <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans font-semibold leading-normal text-size-sm">
                                            <span className="leading-normal text-size-sm font-weight-bolder text-lime-500">
                                                {totalData[key].total}
                                            </span>{" "}
                                            {totalData[key].name}
                                        </p>
                                        <h5 className="mb-0 font-light text-xs text-neutral-600 mt-3">
                                            <FormattedDate
                                                date={
                                                    totalData[key].latest
                                                        .updated_at
                                                }
                                            />
                                        </h5>
                                    </div>
                                </div>
                                <div className="w-4/12 max-w-full px-3 text-right flex-0">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-fuchsia shadow-soft-2xl">
                                        <i className="text-2xl relative top-3.5">
                                            {React.createElement(
                                                iconMap[totalData[key].icon]
                                            )}
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TotalDataCard;
