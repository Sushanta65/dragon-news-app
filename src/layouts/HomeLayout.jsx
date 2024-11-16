import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import MainLayout from "./MainLayout";

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className="w-4/5 mx-auto">
                <LatestNews></LatestNews>
            </section>
            <section className="w-4/5 mx-auto">
                <Navbar></Navbar>
            </section>
            <section className="w-4/5 mx-auto">
            <MainLayout></MainLayout>
            </section>
        </div>
    );
};

export default HomeLayout;