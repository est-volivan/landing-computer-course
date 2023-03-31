import React from 'react'
import Counter from './Counter'
import CounterDisplay from './CounterDisplay'
import { useState } from 'react'

const CounterComponent = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <Counter increment = {() => setCount(count+1)}/>
      <CounterDisplay count = {count}/>
    </div>
  )
}

export default CounterComponent
