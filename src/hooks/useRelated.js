import { useState, useEffect } from "react";
import {reletedvideo} from "../utils/constant";


const useRelatedVideos = (videoId) => {

    const [relatedVideos, setRelatedVideos] = useState([]) 
    const [pageToken, setPageToken] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    useEffect(() => {
        setRelatedVideos([])
        getRelatedVideos()
        window.scrollTo(0, 0)
    }, [videoId])

    useEffect(() => {
        const handleScroll = () => {
          if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight
          ) {
            getRelatedVideos();
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [pageToken]);

    async function getRelatedVideos() {

      try {
        setLoading(true);
        const data = await fetch(`${reletedvideo}${videoId}&pageToken=${pageToken}`);
        
        if (!data.ok) {
          throw new Error(`Failed to fetch related videos: ${data.status} ${data.statusText}`);
        } 
        const dataJson = await data.json();
        
        setLoading(false);
        setRelatedVideos((prevItems) => [...prevItems, ...dataJson?.items]);
        setPageToken(dataJson.nextPageToken);
      } catch (error) {
        console.error('Error while fetching related videos:', error);
        setError(error)
      }
   
    }

    return [relatedVideos, loading, error]
}

export default useRelatedVideos