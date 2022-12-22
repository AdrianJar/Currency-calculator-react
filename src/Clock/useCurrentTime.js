import { useEffect, useState } from "react";

export const useCurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(setIntervalId);
        }
    }, []);

    return time;
};

