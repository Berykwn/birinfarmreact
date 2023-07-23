import Navbar from "@/Components/Fragments/Partials/Navbar";

const MainLayout = (props) => {
    return (
        <div>
            <div className="">
                <Navbar />
            </div>
            <main>{props.children}</main>
        </div>
    );
};

export default MainLayout;
