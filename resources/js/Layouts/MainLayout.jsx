import Footer from "@/Components/Fragments/Partials/Footer";
import Navbar from "@/Components/Fragments/Partials/Navbar";
import { Head } from "@inertiajs/react";

const MainLayout = (props) => {
    const { title, pages, children, auth } = props;
    return (
        <div>
            <Head title={title} />
            <div className=""> 
                <Navbar pages={pages} auth={auth} />
            </div>

            <main>{children}</main>

            <Footer />
        </div>
    );
};

export default MainLayout;
