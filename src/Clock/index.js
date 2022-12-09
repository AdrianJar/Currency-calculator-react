import "./style.css";
import { CurrentTime } from "./currentTime";

const Time = () => {
    const date = CurrentTime();

    const formatedDate = date.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    return (
        <p className="clock">
            <>Dzisiaj jest {formatedDate}</>
        </p>
    );
};

export default Time;