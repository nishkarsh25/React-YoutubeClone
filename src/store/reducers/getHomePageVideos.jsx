import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext,{getState}) => {
        
    }
)