import './Card.css';
import { useState,useEffect } from 'react';
function Card(props) {
    const [fruit, setFruit] = useState("banana")
    const clickOrange = () => {setFruit("orange")}
    const clickYellow = () => {setFruit("banana")}
    const [count, setCount] = useState(0)
    const increment = () => {setCount(count + 1)}
    const decrement = () => {setCount(count - 1)}
    useEffect(()=>{
        document.title = `Вы нажали ${count} раз`
    })
    return(
        <div className="container">
           Привет, {props.name}
           <p>{props.numbers.join(', ')}</p>
           <div>{count}</div>
           <button onClick={increment}>+</button>
           <button onClick={decrement}>-</button>
           <div>Your fruit is {fruit}</div>
           <button onClick={clickOrange}style={{background: "orange"}}>.</button>
           <button onClick={clickYellow}style={{background: "yellow"}}>.</button>
        </div>
    )
};
Card.defaultProps = {name: "Алексей"}
export default Card;
