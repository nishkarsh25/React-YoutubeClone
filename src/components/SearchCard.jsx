import React from 'react';
import { Link } from 'react-router-dom';

const SearchCard = ({ data }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <Link to={`/watch/${data.videoId}`} className="block">
        <img
          className="w-full h-48 object-cover"
          src={data.videoThumbnail}
          alt={data.videoTitle}
        />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          <Link to={`/watch/${data.videoId}`} className="hover:text-blue-500">
            {data.videoTitle}
          </Link>
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2">{data.videoDescription}</p>
        <div className="flex items-center mt-2">
          <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
            {data.videoViews} views
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
            {data.videoAge}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
