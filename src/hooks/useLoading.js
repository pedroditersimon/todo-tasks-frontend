import { useState } from "react";
import Loading from "../components/Loading";

function useLoading(initialState=false) {
    const [isLoading, setIsLoading] = useState(initialState);

    function show() {
        return (
            <Loading />
        );
    }

    return { isLoading, setIsLoading, show };
}

export default useLoading;