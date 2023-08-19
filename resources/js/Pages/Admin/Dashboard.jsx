import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import ChartPemesanan from "@/Components/Fragments/ChartPemesanan";
import TotalDataCard from "@/Components/Fragments/Card/TotalDataCard";
import LatestCustomerCard from "@/Components/Fragments/Card/LatestCustomerCard";

export default function Dashboard(props) {
    const { auth, pages, chartData, totalData, latestOrder } = props;

    return (
        <AdminLayout pages={pages} auth={auth}>
            <section>
                <TotalDataCard totalData={totalData}/>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="lg:w-2/3">
                        <ChartPemesanan chartData={chartData} />
                    </div>
                    <div className="lg:w-1/3">
                        <LatestCustomerCard latestOrder={latestOrder}/> 
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
}
