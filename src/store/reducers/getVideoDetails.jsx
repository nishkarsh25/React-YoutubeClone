import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseVideoDetailsData } from "../../utils/parseVideoDetailsData";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const getVideoDetails = createAsyncThunk(
    "youtube/App/videoDetails",
    async(id) => {
        const {
            data:{items},
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`);
        

        const parsedData = parseVideoDetailsData(items[0]);
        console.log(parsedData)
        return parsedData;
        
    }
);

