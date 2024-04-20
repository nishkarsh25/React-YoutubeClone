import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm:"",
    searchResults:[],
    nextPageToken:null,
    recommendedVideo:[]
};


const youtubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
        updateNextPageToken(state, action) {
            // Update nextPageToken with the payload from action
            state.nextPageToken = action.payload;
          }     
    },
    extraReducers:(builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        
    }
})

export const { updateNextPageToken } = youtubeSlice.actions;
export default youtubeSlice.reducer;