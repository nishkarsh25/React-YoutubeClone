import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext,{getState}) => {
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState,videos},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video&${
            isNext ? `pageToken=${nextPageTokenFromState}` : ""
          }`);
        console.log(response)
    }
)