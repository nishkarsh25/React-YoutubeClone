import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsYoutube, BsBell, BsPersonCircle } from 'react-icons/bs';
import { RiVideoAddLine } from 'react-icons/ri';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Your search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="flex justify-between items-center px-6 h-16 bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="flex items-center space-x-4">
        <GiHamburgerMenu className="text-3xl cursor-pointer" />
        <BsYoutube className="text-4xl text-red-500" />
        <span className="text-xl font-bold">YouTube</span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex items-center space-x-2"
      >
        <input
          type="text"
          placeholder="Search"
          className="w-72 h-10 bg-gray-800 text-white focus:outline-none rounded-md px-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="h-10 w-10 flex items-center justify-center bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
        >
          <AiOutlineSearch className="text-white" />
        </button>
      </form>
      <div className="flex gap-4 items-center text-xl">
        <FaMicrophone className="text-gray-400 hover:text-white cursor-pointer" />
        <RiVideoAddLine className="text-gray-400 hover:text-white cursor-pointer" />
        <div className="relative">
          <BsBell className="text-gray-400 hover:text-white cursor-pointer" />
          <span className="absolute bottom-0 left-1 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <BsPersonCircle className="text-3xl text-gray-400 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
