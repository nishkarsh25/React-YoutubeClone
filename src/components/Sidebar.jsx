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
    
  );
};

export default Sidebar;
