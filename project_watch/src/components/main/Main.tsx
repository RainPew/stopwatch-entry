import React, { useState, useEffect } from 'react';
import calculateTimeInSeconds from '../helper/Calculate';
import Controls from '../Controls/Controls';

function Main() {
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [timeArray, setTimeArray] = useState<Array<number | string>>([]);
    const [laps, setLaps] = useState<(any)[]>([]);


    useEffect(() => {
        setTimeArray(calculateTimeInSeconds(timeInSeconds));
    }, [timeInSeconds]);

    const handleLapTime = () => {
        const currLaps = [...laps, calculateTimeInSeconds(timeInSeconds)];
        setLaps(currLaps)
    }
    return (
        <main className="stopwatch-container">
            <section className="timer-display">
                <p>{timeArray[0]}</p>
                <span>:</span>
                <p>{timeArray[1]}</p>
                <span>:</span>
                <p>{timeArray[2]}</p>
            </section>
            <Controls setTimeInSeconds={setTimeInSeconds} handleLapTime={handleLapTime} />
            <div>
                {laps.map((lap, index) =>
                    <div className="lap-display">
                        <p>{lap[0]}:{lap[1]}:{lap[2]}</p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Main;
