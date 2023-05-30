import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeVideos, addVideos, loadVideos } from "../utils/dataSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEOS_API } from "../utils/constant";

const useMy = () => {
  const [video, setVideo] = useState([]);
  const categoryStatus = useSelector((store) => store.category.categoryStatus);
  const searchString = useSelector((store) => store.category.searchString);

  const dispatch = useDispatch();
 

  useEffect(() => {
    handleData();
   
  }, []);
  useEffect(() => {
    handleData();
   
  }, [searchString]);

  async function handleData() {
    dispatch(loadVideos(true));
    let apiUrl;
    if (categoryStatus || searchString!=="") {
      apiUrl = `${YOUTUBE_SEARCH_API}${searchString}`;
    } else {
      apiUrl = YOUTUBE_VIDEOS_API;
    }

    const data = await fetch(apiUrl);
    const json = await data.json();
    
    dispatch(addVideos(json.items));
    dispatch(loadVideos(false));
  }
  return video;
};

export default useMy;

