
import { useLoaderData } from "react-router-dom";
import NewsArtical from "../Components/NewsArtical";

const CategoryNews = () => {
    
    const {data: news} = useLoaderData()
    console.log(news)
    return (
        <div className="space-y-5">
            {
                news.map(newsArtical => <NewsArtical key={newsArtical._id} newsArtical={newsArtical}></NewsArtical>)
            }
        </div>
    );
};

export default CategoryNews;




