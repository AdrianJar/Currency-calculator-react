import { useCurrentTime } from "./useCurrentTime.js";
import { StyledClock } from "./styled.js";

const Time = () => {
    const date = useCurrentTime();

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
        <StyledClock>
            <>Dzisiaj jest {formatedDate}</>
        </StyledClock>
    );
};

export default Time;