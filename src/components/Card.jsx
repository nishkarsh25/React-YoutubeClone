import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
      <Link to={`/watch/${data.videoId}`}>
        <img
          className="w-full"
          src={data.videoThumbnail}
          alt={data.videoTitle}
        />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link to={`/watch/${data.videoId}`}>{data.videoTitle}</Link>
        </div>
        <p className="text-gray-700 text-base">{data.videoDescription}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {data.videoViews} views
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {data.videoAge}
        </span>
      </div>
    </div>
  );
};

export default Card;
