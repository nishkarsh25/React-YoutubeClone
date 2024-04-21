import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { clearVideos } from '../features/youtubeSlice';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import SearchCard from '../components/SearchCard';

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.youtubeApp.videos);
    const searchTerm = useSelector((state) => state.youtubeApp.searchTerm);

    useEffect(() => {
        dispatch(clearVideos());
        if (searchTerm === '') navigate('/');
        else dispatch(getSearchPageVideos(false));
    }, [dispatch, navigate, searchTerm]);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen">
            <Navbar onMenuClick={toggleSidebar} />
            <div className="flex h-screen">
                {isSidebarOpen && <Sidebar />}
                <div className="flex-1 p-4 overflow-y-auto">
                    <InfiniteScroll
                        dataLength={videos.length}
                        next={() => dispatch(getSearchPageVideos(true))}
                        hasMore={videos.length < 500}
                        loader={<Spinner />}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >

                        {videos.map((item) => (
                            <div className="my-5" key={item.videoId}>
                                <SearchCard data={item} />
                            </div>
                        ))}

                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
}
