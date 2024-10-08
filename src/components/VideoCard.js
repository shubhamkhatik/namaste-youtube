import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const categoryStatus = useSelector((store) => store.category.categoryStatus);


  return (
    <div className="p-2 m-2 shadow-lg w-full max-w-fit">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {/* {!categoryStatus&&<li>{statistics.viewCount} views</li>} */}
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info} />
      <h6>advertisement</h6>
    </div>
  );
};

export default VideoCard;