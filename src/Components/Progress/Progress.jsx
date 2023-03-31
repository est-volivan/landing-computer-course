import { ProgressBar } from "../ProgressBar/ProgressBar";
import './Progress.css'
import Logo2 from './img/logo2.png'
import React from 'react'

const Progress = () => {
  return (
    <div className="progress-bar">
        <div className="progress-bar__header">
            <p><img src={Logo2}/> Быстрый старт</p>
            <h1>Больше 90% учеников прошли полный курс и смогли <br/> собрать свой первый компьютер</h1>
        </div>
        <div className="progress-bar__bars"> 
            <ProgressBar value = "100"/>
            <ProgressBar value = "75"/>
            <ProgressBar value = "50"/>
            <ProgressBar value = "25"/>
        </div>
    </div>
  )
}

export default Progress
