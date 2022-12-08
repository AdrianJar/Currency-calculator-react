import "./style.css"
import { useEffect, useState } from "react";

const CurrentTime = () => {
    const startTime = new Date();
    const formatedDate = startTime.toLocaleDateString(
        undefined,
        {
            month: "long",
            weekday: "long",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        },
    )


    const [time, getTime] = useState(formatedDate);

    useEffect(() => {
        setInterval(() => {
            
        }, 1000);
    });



    return (
        <div>
            {time}
        </div>
    );
};

export default CurrentTime;
