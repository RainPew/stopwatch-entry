import React, { useRef, useState } from 'react';
import './Controls.css';

type Props = {
    setTimeInSeconds: Function,
    handleLapTime: any,
}

function Controls(props: Props) {
    const { setTimeInSeconds, handleLapTime } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlayButton = () => {
        const interval: any = setInterval(() => {
            setTimeInSeconds((previousState: number) => previousState + 1);
        }, 10);
        setIntervalId(interval);

    }
    const handleStopButton = () => {
        clearInterval(intervalId);
    }

    const handleReset = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }
  

    return (
        <div className="stopwatch-controls-container">
            <button onClick={handlePlayButton} type="button">Play</button>
            <button onClick={handleStopButton} type="button">Stop</button>
            <button onClick={handleReset} type="button">Reset</button>
            <button onClick={handleLapTime} type="button">ShowLapTime</button>
        </div>
    );
}

export default Controls;