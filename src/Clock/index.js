import "./style.css";
import { CurrentTime } from "./currentTime";

const Time = () => {
    const time = CurrentTime();

    const formatedTime = time.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    return (
        <p className="clock">
            <>Dziś jest: {formatedTime}</>
        </p>
    );
};

export default Time;