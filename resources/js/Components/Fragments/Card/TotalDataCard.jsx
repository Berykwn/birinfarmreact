import {
    MdStorefront,
    MdOutlineWarehouse,
    MdSupervisorAccount,
} from "react-icons/md";

const badgesMenu = [
    {
        name: "Pesanan",
        routeName: "dashboard.pesanan",
        icon: <MdStorefront style={{ fontSize: "1.5rem" }} />,
        total: 5,
    },
    {
        name: "Ternak",
        routeName: "dashboard",
        icon: <MdOutlineWarehouse style={{ fontSize: "1.5rem" }} />,
        total: 6,
    },
    {
        name: "Users",
        routeName: "dashboard",
        icon: <MdSupervisorAccount style={{ fontSize: "1.5rem" }} />,
        total: 7,
    },
    {
        name: "Users",
        routeName: "dashboard",
        icon: <MdSupervisorAccount style={{ fontSize: "1.5rem" }} />,
        total: 7,
    },
];

const TotalDataCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -mx-3">
            {badgesMenu.map((item) => (
                <div key={item.id} className="px-3">
                    <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans font-semibold leading-normal text-size-sm">
                                            <span className="leading-normal text-size-sm font-weight-bolder text-lime-500">
                                                {item.total}
                                            </span>{" "}
                                            {item.name}
                                        </p>
                                        <h5 className="mb-0 font-light text-neutral-600">
                                            update:
                                        </h5>
                                    </div>
                                </div>
                                <div className="w-4/12 max-w-full px-3 text-right flex-0">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-fuchsia shadow-soft-2xl">
                                        <i className="text-size-lg relative top-3.5">
                                            {item.icon}
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

// <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">
//     <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
//         <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">Data pesanan: </h5>
//         <p class="font-normal text-gray-700">Terbaru: Jum'at 11 Agustus 2023</p>
//     </div>
//     <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
//         <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">Daftar ternak: </h5>
//         <p class="font-normal text-gray-700">Lorem ipsum dolor sit amet.</p>
//     </div>
//     <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
//         <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">Total user: </h5>
//         <p class="font-normal text-gray-700">Lorem ipsum dolor sit amet.</p>
//     </div>
//     <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
//         <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">Total user: </h5>
//         <p class="font-normal text-gray-700">Lorem ipsum dolor sit amet.</p>
//     </div>
// </div>
