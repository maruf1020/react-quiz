import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/UseVideoList";
import Video from "./Video";

export default function Videos() {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
          loader={<h4>Loading...</h4>}>
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link
                to={`/quiz/${video.youtubeID}`}
                state={{ videoTitle: video.title }}
                key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}></Video>
              </Link>
            ) : (
              <Video
                key={video.youtubeID}
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}></Video>
            )
          )}
        </InfiniteScroll>
      )}
      {videos.length === 0 && !loading && <p>No Videos Available</p>}
      {loading && <div>Loading...</div>}
      {error && <div>There was an error</div>}
    </div>
  );
}
