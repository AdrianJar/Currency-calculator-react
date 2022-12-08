import { useEffect, useState } from "react";

export const CurrentTime = () => {
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

