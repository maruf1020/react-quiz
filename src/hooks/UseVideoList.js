import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchVideos() {
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(videosRef, orderByKey());

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
                    console.log("No data available");
                }
            }
            catch (err) {
                console.log(err);
                setError(true);
                setLoading(false);
            }
        }
        fetchVideos();
    }, []);

    return {
        loading,
        error,
        videos,
    };
}