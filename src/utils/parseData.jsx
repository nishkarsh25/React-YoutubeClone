import axios from 'axios';
import { parseVideoDuration } from './parseVideoDuration';
import { convertRawtoString } from './convertRawtoString';
import { timeSince } from './timeSince';

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const parseData = async (items) => {

  try {
    const videoIds = [];
    const channelIds = [];

    items.forEach((item) => {
      channelIds.push(item.snippet.channelId);
      videoIds.push(item.id.videoId);
    });

    const {
      data: { items: channelsData },
    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(
      ","
    )}&key=${API_KEY}`);





    const parsedChannelsData = [];
    channelsData.forEach((channel) => parsedChannelsData.push({
      id: channel.id,
      image: channel.snippet.thumbnails.default.url,
    }));

    const {
      data: { items: videosData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=${API_KEY}`
    );

    console.log(videosData)



    const parseData = [];
    items.forEach((item, index) => {
      
    });
    
  }
  catch (err) {
    console.log(err);
  }
};