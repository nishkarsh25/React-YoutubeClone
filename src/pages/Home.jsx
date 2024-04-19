import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';

const Home = () => {

  const dispatch = useDispatch();
  const videos = useSelector((state)=> state.youtubeApp.videos);

  useEffect(()=>{
    dispatch(getHomePageVideos(false));
  },[dispatch])

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
