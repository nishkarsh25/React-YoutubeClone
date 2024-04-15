import {configureStore} from "@reduxjs/toolkit";
import youtubeReducer from '../features/youtubeSlice'

const store = configureStore({
    reducer:{
        youtubeApp: youtubeReducer,
    }
});

export default store;