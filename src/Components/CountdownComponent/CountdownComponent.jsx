import React from 'react'
import './CountdownComponent.css'
import { Countdown } from '../Countdown/Countdown'

const CountdownComponent = () => {
  return (
    <div className="intro__title">
      <h1>Первый курс<br />по компьютерной сборке</h1>
              <Countdown/>
    </div>
  )
}

export default CountdownComponent

