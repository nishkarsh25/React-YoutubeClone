import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar onMenuClick={toggleSidebar} /> {/* Pass the toggleSidebar function as a prop */}
      {isSidebarOpen && <Sidebar />} {/* Render the Sidebar only if isSidebarOpen is true */}
    </div>
  );
};

export default Home;
