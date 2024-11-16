import React from "react";

const NewsArtical = ({ newsArtical: news }) => {
  const { author, title, details, thumbnail_url, rating, total_view, published_date, image_url } = news;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="flex items-center p-4">
        <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h2 className="font-semibold">{author.name || "Unknown Author"}</h2>
          <p className="text-sm text-gray-500">{new Date(published_date).toLocaleDateString()}</p>
        </div>
        <button className="btn btn-ghost btn-square ml-auto">
          <i className="fa-solid fa-share-alt"></i>
        </button>
      </div>
      <figure>
        <img src={image_url} alt="Thumbnail" className="w-full h-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-700">{details.slice(0, 100)}...</p>
        <a href="#" className="text-blue-500 font-medium">Read More</a>
        <div className="flex items-center mt-4">
          <div className="flex items-center text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <i key={i} className={`fa-solid fa-star ${i < Math.floor(rating.number) ? "text-yellow-500" : ""}`}></i>
            ))}
            <span className="ml-1 text-gray-500">{rating.number}</span>
          </div>
          <div className="ml-auto flex items-center text-gray-500">
            <i className="fa-regular fa-eye mr-1"></i>
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArtical;
