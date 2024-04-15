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
    <div>
        
    </div>
  );
};

export default Navbar;
