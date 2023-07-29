import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import Jumbotron from "@/Components/Fragments/Partials/Jumbotron";
import ProductCard from "@/Components/Fragments/Card/ProductCard";
import ListJenis from "@/Components/Fragments/Listdata/ListJenis";

const Home = (props) => {
    const { title, pages, jenis, auth } = props;
    return (
        <MainLayout title={title} pages={pages} auth={auth}>
            <div className="px-4 py-8 lg:px-28 lg:py-10">
                <Jumbotron />
                <div className="pt-10 pb-2 flex justify-center">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                        Produk Kami
                    </h3>
                </div>
                <div className="mx-auto max-w-full py-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <ListJenis jenis={jenis} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Home;
