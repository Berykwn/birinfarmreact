import MainLayout from "@/Layouts/MainLayout";
import Banner from "@/Components/Fragments/Partials/Banner";

const Home = (props) => {
    console.log(props)
    return (
        <MainLayout>
            <div className="lg:px-28 lg:py-14">
                <Banner banner={props.banner.data}/>
            </div>
        </MainLayout>
    );
};

export default Home;
