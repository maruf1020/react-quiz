import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(videosRef, orderByKey(), startAt("" + page), limitToFirst(12));

            try {
                setError(false);
                setLoading(true);

                const snapshot = await get(videoQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setVideos((prevVideos) => {
                        return [...prevVideos, ...Object.values(snapshot.val())]
                            //filter duplicate videos
                            .filter((video, index, self) => self.findIndex(v => v.youtubeID === video.youtubeID) === index);
                    });
                } else {
                    setHasMore(false);
                }
            }
            catch (err) {
                console.log(err);
                setError(true);
                setLoading(false);
            }
        }
        fetchVideos();
    }, [page]);

    return {
        loading,
        error,
        videos,
        hasMore
    };
}