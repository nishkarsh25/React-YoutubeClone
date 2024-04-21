import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";
import { updateNextPageToken } from "../../features/youtubeSlice";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext,{getState, dispatch}) => { // Destructure dispatch from the parameters
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState,videos},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="js dev"&key=${API_KEY}&part=snippet&type=video&${
            isNext ? `pageToken=${nextPageTokenFromState}` : ""
          }`);
        const items = response.data.items;
        const parsedData = await parseData(items);

       
        const nextPageToken = response.data.nextPageToken;

        
        dispatch(updateNextPageToken(nextPageToken));

        
        return { parsedData: [...videos, ...parsedData], nextPageToken };
    }
)
