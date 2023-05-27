import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function useSubmitAnswer({ quesAndAns, id }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { currentUser } = useAuth();

    useEffect(() => {
        async function submitAnswer() {
            const uid = currentUser.uid;

            const db = getDatabase();
            const resultRef = ref(db, `result/${uid}`);

            try {
                setError(false);
                setLoading(true);

                await set(resultRef, {
                    [id]: quesAndAns,
                });
                console.log("Answer submitted");
                setLoading(false);
            }
            catch (err) {
                console.log(err);
                setError(true);
                setLoading(false);
            }
        }
        submitAnswer();
    }, [quesAndAns, id, currentUser]);

    return {
        loading,
        error
    };
}