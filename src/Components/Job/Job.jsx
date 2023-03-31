import React from 'react'
import './Job.css'
import comp from './img/comp.png'
import flash from './img/flash.png'
import cable from './img/cable.png'

const Job = () => {
  return (
    <div className='job'>
      <h1>Получите профессию прямо сейчас</h1>
      <div className='job__info'>
        <div>
            <img src={comp}/>
            <h2>Только практические<br />навыки в работе</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
        </div>
        <div>
            <img src={flash}/>
            <h2>Работа на самом<br />современном оборудовании</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
        </div>
        <div>
            <img src={cable}/>
            <h2>Сертификация<br />по окончании обучения</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
        </div>
      </div>
    </div>
  )
}

export default Job
