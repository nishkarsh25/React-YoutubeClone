import React from 'react';
import {
  MdHome,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdWatchLater,
} from 'react-icons/md';
import { LuThumbsUp } from 'react-icons/lu';
import { GiHamburgerMenu } from 'react-icons/gi';

const Sidebar = () => {
  const mainLinks = [
    {
      icon: <MdHome className="text-3xl text-gray-400" />,
      name: 'Home',
    },
    {
      icon: <GiHamburgerMenu className="text-3xl text-gray-400" />,
      name: 'Explore',
    },
    {
      icon: <MdSubscriptions className="text-3xl text-gray-400" />,
      name: 'Subscriptions',
    },
  ];

  const otherLinks = [
    {
      icon: <MdVideoLibrary className="text-3xl text-gray-400" />,
      name: 'Library',
    },
    {
      icon: <MdHistory className="text-3xl text-gray-400" />,
      name: 'History',
    },
    {
      icon: <MdWatchLater className="text-3xl text-gray-400" />,
      name: 'Watch Later',
    },
    {
      icon: <LuThumbsUp className="text-3xl text-gray-400" />,
      name: 'Liked Videos',
    },
  ];

  return (
    <div className="w-64 bg-[#212121] py-4 px-6 flex flex-col h-screen">
      <ul className="flex flex-col space-y-2">
        {mainLinks.map(({ icon, name }) => (
          <li
            key={name}
            className={`flex items-center p-3 rounded-lg ${
              name === 'Home' ? 'bg-gray-800' : ''
            } hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105`}
          >
            {icon}
            <span className="text-white text-lg font-semibold ml-4">
              {name}
            </span>
          </li>
        ))}
      </ul>
      <hr className="border-gray-700 my-4" />
      <ul className="flex flex-col space-y-2">
        {otherLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {icon}
            <span className="text-white text-lg font-semibold ml-4">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
