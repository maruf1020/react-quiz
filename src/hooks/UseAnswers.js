import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchAnswers() {
            const db = getDatabase();
            const AnswerRef = ref(db, "answers/" + videoID + "/questions");
            const AnswerQuery = query(AnswerRef, orderByKey());

            try {
                setError(false);
                setLoading(true);

                const snapshot = await get(AnswerQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setAnswers((prevQuestions) => {
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
        fetchAnswers();
    }, [videoID]);

    return {
        loading,
        error,
        answers,
    };
}