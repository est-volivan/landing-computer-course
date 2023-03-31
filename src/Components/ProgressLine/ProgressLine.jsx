import './ProgressLine.css'
export const ProgressLine = (props) => {
    return(
        <div className="wrapper1">
            <p className="header">
                Заработано учениками: <span>{props.current}</span>
            </p>
            <div className="line">
                <div className="line__progress" style={{width: `${props.current/props.max*100}%`}}>

                </div>
            </div>
            <div className="bottom">
                <span>{props.min}</span><span>{props.max}</span>
            </div>
        </div>
    )
}
//пропс часы минуты секунды день
//обрытнй отсчет 