import React, {useEffect} from 'react';

import styles from './Clock.module.css'


type PropsType = {
    mode: "digital" | "analog"
}


export const getDateString = (num: number) => {
    return num < 10 ? '0' + num : num
}


export const Clock: React.FC<PropsType> = ({mode}) => {
    const [date, setDate] = React.useState(new Date())


    useEffect(() => {
        const IntervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(IntervalID)
        }


    }, [])

    let viewClock;


    switch (mode) {
        case "analog":
            viewClock = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            viewClock = <DigitalClockView date={date}/>
    }


    return (
        <div>
            {viewClock}
        </div>
    );
};

type ClockViewType = {
    date: Date
}

const DigitalClockView: React.FC<ClockViewType> = ({date}) => {
    return <>
        <span>{getDateString(date.getHours())}</span>:
        <span>{getDateString(date.getMinutes())}</span>:
        <span>{getDateString(date.getSeconds())}</span>
    </>
}

const AnalogClockView: React.FC<ClockViewType> = ({date}) => {


    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return   <div className={styles["clock"]}>
        <div className={styles["analog-clock"]}>
            <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
            <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
            <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
        </div>

    </div>
}

