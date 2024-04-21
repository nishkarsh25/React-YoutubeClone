import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Watch() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentPlaying = useSelector(
    (state) => state.youtubeApp.currentPlaying
  );

  const recommendedVideo = useSelector(
    (state) => state.youtubeApp.recommendedVideo
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden">
          <Navbar onMenuClick={toggleSidebar} />
          <div className="flex">
            {isSidebarOpen && <Sidebar />}
            <div className="flex-1 p-4 overflow-y-auto">
              <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                  frameBorder="0"
                  width="800"
                  height="502"
                  allowFullScreen
                  title="Youtube Player">
                  </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
