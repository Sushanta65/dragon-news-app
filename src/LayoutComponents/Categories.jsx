import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
        .catch(err => console.log(err))
    }, [])
    console.log(categories)
    return (
        <div>
            <h2 className="pb-3 text-md font-semibold">Categories</h2>
            <div className="flex flex-col w-full gap-2">
                {
                    categories.map(category => 
                        <Link key={category.category_id} className="btn btn-sm justify-start text-[#7c7b7b]" to={`/category/${category.category_id}`}>{category.category_name}</Link>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;