import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShimmerContainer from "../pages/Shimmer";

const VideoContainer = () => {
  const videos = useSelector((store) => store.data.video);
  const loading = useSelector((store) => store.data.loading);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`dark:bg-slate-800 dark:text-yellow-50 grid gap-4 
      ${isMenuOpen ? "grid-cols-3 w-[88%]" : "grid-cols-4 w-full"}`}
    >
      {/* <div className="dark:bg-slate-800 dark:text-yellow-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5"> */}
      {!videos.length > 0 || loading ? (
        <ShimmerContainer />
      ) : (
        <>
          {videos[0] && <AdVideoCard info={videos[0]} />}
          {videos.map((video) => (
            <Link
              key={video.id}
              to={
                "/watch?v=" +
                (video.id && typeof video.id === "object"
                  ? video.id.videoId
                  : video.id)
              }
            >
              <VideoCard info={video} isMenuOpen={isMenuOpen} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default VideoContainer;
