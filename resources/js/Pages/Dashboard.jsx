import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import ChartPemesanan from "@/Components/Fragments/ChartPemesanan";

export default function Dashboard(props) {
    const { auth, pages, title, chartData } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth}>
            <section className="bg-stone-100 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2">
                        Wellcome! {auth.user.name}
                    </h1>
                    <ChartPemesanan chartData={chartData} />
                </div>
            </section>
        </AdminLayout>
    );
}
