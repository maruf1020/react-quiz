import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            const db = getDatabase();
            const QuizRef = ref(db, "quiz/" + videoID + "/questions");
            const QuizQuery = query(QuizRef, orderByKey());

            try {
                setError(false);
                setLoading(true);

                const snapshot = await get(QuizQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [...prevQuestions, ...Object.values(snapshot.val())]
                            .filter((questions, index, self) => self.findIndex(v => v.title === questions.title) === index);

                    });
                }
            }
            catch (err) {
                console.log(err);
                setError(true);
                setLoading(false);
            }
        }
        fetchQuestions();
    }, [videoID]);

    return {
        loading,
        error,
        questions,
    };
}