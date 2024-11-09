import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ onTimeUp, duration }) => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);
    const { hours, seconds, minutes } = useTimer({
        expiryTimestamp,
        onExpire: onTimeUp,
    });

    return (
        <div>
            <h2>
                Time Remaining: 0{hours}:{minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
            </h2>
        </div>
    );
};

export default Timer;
