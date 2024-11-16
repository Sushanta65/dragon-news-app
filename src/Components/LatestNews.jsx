import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-[#F3F3F3] py-3 px-2">
      <div>
        <h2 className="bg-[#D72050] text-base-100 py-1 px-2">Latest</h2>
      </div>
      <div>
        <Marquee pauseOnHover={true} className="space-x-10">
          <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, eaque.</Link>
          <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, eaque.</Link>
          <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, eaque.</Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
