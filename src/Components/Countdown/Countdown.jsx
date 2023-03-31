import './Countdown.css';
import { useState,useEffect } from 'react';
export const Countdown = (props) => {
    const date = new Date()
    const [day, setDay] = useState(7);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(10);
    const [over, setOver] = useState(false);
    const tick = () =>{
        setSecond(second - 1);
        if (second === 0 && minute >= 0 && !over) {
            console.log("sfdsf")
            setSecond(59); 
            setMinute(minute - 1);
        }
        if (minute < 0 && hour >= 0) {
            setMinute(59);
            setHour(hour - 1)
        }
        if (hour < 0 && day >= 0) {
            setHour(23)
            setDay(day - 1)
        }
        if (day === 0 && hour === 0 && minute === 0 && second === 0) {
            setOver(true)
            setDay(0)
            setHour(0)
            setMinute(0)
            setSecond(0)
        }
        // clearInterval(timerID)
    }
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
        return () => clearInterval(timerID)
    }) 
    

    return(
        <div className='timer'>
            <div className='timer__state'>
                <span>{day}</span>
                Дней
            </div>
            <div className='timer__state'>
                <span>{hour}</span>
                Часов
            </div>
            <div className='timer__state'>
                <span>{minute}</span>
                Минут
            </div>
            <div className='timer__state'>
                <span>{second}</span>
                Секунд
            </div>
        </div>
        
    )
}