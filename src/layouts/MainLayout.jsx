import Categories from "../LayoutComponents/Categories";
import FIndUsOn from "../LayoutComponents/FIndUsOn";
import LoginOptions from "../LayoutComponents/LoginOptions";

const MainLayout = () => {
    return (
        <div className="grid grid-cols-12 gap-10">
            <div className="col-span-3">
                <Categories></Categories>
            </div>
            <div className="col-span-6">News</div>
            <div className="col-span-3">
                <LoginOptions></LoginOptions>
                <FIndUsOn></FIndUsOn>
            </div>
        </div>
    );
};

export default MainLayout;