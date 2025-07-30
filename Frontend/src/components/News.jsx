import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "afa66103711244f6bbf3b57f4a91d826"; // Replace with your NewsAPI key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=nuclear%20isotopes&sortBy=publishedAt&language=en&pageSize=12&apiKey=${API_KEY}`
        );
        const data = await res.json();
        setNews(data.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const NewsCard = ({ title, description, url, urlToImage, publishedAt, source }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-4 h-full flex flex-col">
        {urlToImage && (
          <img
            src={urlToImage}
            alt={title}
            className="w-full h-48 object-cover rounded mb-3"
          />
        )}
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>
        <div className="text-xs text-gray-500 mt-2 flex justify-between">
          <span>{source?.name}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Latest News on Nuclear Technology & Isotopes
        </h1>

        {loading ? (
          <p className="text-center text-gray-600 text-lg">Loading news...</p>
        ) : news.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No articles found. Try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default News;
