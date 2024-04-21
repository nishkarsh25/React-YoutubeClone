import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.youtubeApp.videos);
  const [hasMore, setHasMore] = useState(true); // State to manage whether there are more videos to load
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to load more videos
  const fetchMoreData = () => {
    dispatch(getHomePageVideos(true)).then((response) => {
      if (response.payload.length === 0) {
        setHasMore(false); // No more videos to load
      }
    });
  };

  return (
    <div className="min-h-screen">
      <div>
        <Navbar onMenuClick={toggleSidebar} />
      </div>
      <div className="flex h-screen">
        {isSidebarOpen && <Sidebar />}
        <div className="flex-1 p-4 overflow-y-auto">
          <InfiniteScroll
            dataLength={videos.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<Spinner />}
            endMessage={<p>No more videos to load</p>}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {videos.map((video) => (
              <Card key={video.videoId} data={video} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Home;
