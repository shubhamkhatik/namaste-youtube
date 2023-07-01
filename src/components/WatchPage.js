import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import LiveChat from "./Chat/LiveChat"
import CommentSection from "./comment/CommentSection"
import RelatedVideos from "./reletedVideos/RelatedVideos"

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" dark:bg-slate-800 dark:text-yellow-50 flex flex-col w-full lg:flex-row ">
      <div className="flex lg:w-[70%] w-full flex-col">
       
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <CommentSection/>
       
      </div>
      <div className="flex lg:w-[30%] w-full flex-col">
            <LiveChat/>
            <RelatedVideos/>
        </div>

    </div>
  );
};

export default WatchPage;
