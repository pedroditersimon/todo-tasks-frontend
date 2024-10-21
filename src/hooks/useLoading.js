import { useState } from "react";
import Loading from "../components/Loading";
import { useCallback, useEffect } from "react";
import useForceUpdateInterval from "./useForceUpdateInterval";

function useLoading(initialState=false, updateOnLoading=false) {
    const [isLoading, _setIsLoading] = useState(initialState);
    const [loadingTime, setLoadingTime] = useState(0);
    useForceUpdateInterval(isLoading && updateOnLoading, 500);

    function setLoading(isLoading) {
        //if (!isLoading) return;
        _setIsLoading(isLoading);
        setLoadingTime(Date.now());
    }

    function getLoadingTime() {
        if (!isLoading) return 0; // not loading
        if (loadingTime === 0) return loadingTime; // no loading time
        return Date.now() - loadingTime;
    }

    function show() {
        return (
            <Loading />
        );
    }

    function showElement(element) {
        if (isLoading)
            return show();

        return element;
    }

    return { isLoading, setLoading, getLoadingTime, show, showElement };
}

export default useLoading;