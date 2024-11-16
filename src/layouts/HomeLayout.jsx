import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import Categories from "../LayoutComponents/Categories";
import FIndUsOn from "../LayoutComponents/FIndUsOn";
import LoginOptions from "../LayoutComponents/LoginOptions";

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
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <Categories></Categories>
        </div>
        <div className="col-span-6">
            <Outlet></Outlet>
        </div>
        <div className="col-span-3">
          <LoginOptions></LoginOptions>
          <FIndUsOn></FIndUsOn>
        </div>
      </div>
      </section>
      
    </div>
  );
};

export default HomeLayout;
