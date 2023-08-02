import Icon from "@/Components/Elements/Icon";
import React from "react";

const Jumbotron = () => {
    return (
        <section className="lg:rounded-md bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Selamat datang di Birinfarm!
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Selamat bergabung di komunitas pertanian kami yang penuh
                    semangat dan berkelanjutan. Bersama-sama, mari ciptakan masa
                    depan yang lebih cerah untuk pertanian.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="#"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300"
                    >
                        Get started
                        <Icon iconName={"right-arrow"} />
                    </a>
                    <a
                        href="#"
                        className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Jumbotron;
