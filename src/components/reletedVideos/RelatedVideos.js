import React from "react";
import { useSearchParams } from "react-router-dom";
import useRelatedVideos from "../../hooks/useRelated";
import VideoCard from "../VideoCard";
import ShimmerContainer from "../../pages/Shimmer";
import { Link } from "react-router-dom";

const RelatedVideos = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [relatedVideos, loading] = useRelatedVideos(videoId);
  return (
    <div className="py-8  w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4">
          {!relatedVideos.length ? (
            <ShimmerContainer />
          ) : (
            relatedVideos.map((video, index) => (
              <Link
                key={video.id}
                to={
                  "/watch?v=" +
                  (video.id && typeof video.id === "object"
                    ? video.id.videoId
                    : video.id)
                }
              >
                <VideoCard key={index} info={video} />
              </Link>
            ))
          )}
          {loading && <ShimmerContainer />}
        </div>
      </div>
    </div>
  );
};

export default RelatedVideos;
