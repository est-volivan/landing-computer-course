import React from 'react'
import './ProgressLineComponent.css'
import { ProgressLine } from '../ProgressLine/ProgressLine'
import { useContext } from 'react'
import { LandingContext } from '../../LandingPage/LandingPage'

const ProgressLineComponent = () => {
  const [studentsAmount, setStudentsAmount] = useContext(LandingContext)
  return (
    <div className="progress">
      <button type="button" className="button-rounded">Заказать курс</button>
            <div className="progress__info">
              <p><span>Учеников всего:</span><span>{studentsAmount} <button onClick={() => setStudentsAmount(studentsAmount + 1)}>+</button> </span></p>
              <p><span>Успешно закончили курс:</span><span>190</span></p>
            </div>
            <ProgressLine min = "0" current = "400000" max = "1000000"/>
    </div>
  )
}

export default ProgressLineComponent
