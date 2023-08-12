import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import ChartPemesanan from "@/Components/Fragments/ChartPemesanan";
import TotalDataCard from "@/Components/Fragments/Card/TotalDataCard";
import LatestCustomerCard from "@/Components/Fragments/Card/LatestCustomerCard";

export default function Dashboard(props) {
    const { auth, pages, title, chartData } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth}>
            <section className="px-8">
                <h1 className="text-gray-900 text-3xl md:text-2xl font-extrabold mb-4">
                    Wellcome! {auth.user.role}
                </h1>
                <TotalDataCard />
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="lg:w-2/3">
                        <ChartPemesanan chartData={chartData} />
                    </div>
                    <div className="lg:w-1/3">
                        <LatestCustomerCard />
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
}
