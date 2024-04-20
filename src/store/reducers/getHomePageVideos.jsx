import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";
import { updateNextPageToken } from "../../features/youtubeSlice";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext,{getState, dispatch}) => { // Destructure dispatch from the parameters
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState,videos},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video&${
            isNext ? `pageToken=${nextPageTokenFromState}` : ""
          }`);
        const items = response.data.items;
        const parsedData = await parseData(items);

        // Extract nextPageToken from the response
        const nextPageToken = response.data.nextPageToken;

        // Dispatch the updateNextPageToken action to update nextPageToken in the state
        dispatch(updateNextPageToken(nextPageToken));

        // Return the parsedData and nextPageToken in the payload
        return { parsedData: [...videos, ...parsedData], nextPageToken };
    }
)
