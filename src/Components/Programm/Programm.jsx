import './Programm.css'
import Ellipse from './img/Ellipse.png'
import React from 'react'

const Programm = () => {
  return (
    <div className='programm'>
        <div className='programm__title'>
        <img src={Ellipse}/>
        <h1>Программа обучения</h1>
        <p>Больше 90% учеников прошли полный курс и смогли<br/>собрать свой первый компьютер</p>
        </div>
        <div className='programm__info'>
            <div className='left'>
                <div className='week'>
                    <span>Неделя №1</span>
                    <p>Красивая часть курса,<br/>которая помогает в успехе</p>
                </div>
                
                <div className='week'>
                    <span>Неделя №3</span>
                    <p>Красивая часть курса,<br/>которая помогает в успехе</p>
                </div>
                <div className='week'>
                    <span>Неделя №5</span>
                    <p>Красивая часть курса,<br/>которая помогает в успехе</p>
                </div>
                <div className='week'>
                    <span>Неделя №7</span>
                    <p>Красивая часть курса,<br/>которая помогает в успехе</p>
                </div>
            </div>
            <div className='lines-left'>
                <div className='line-horizontal'></div>
                <div className='line-horizontal'></div>
                <div className='line-horizontal'></div>
                <div className='line-horizontal'></div>
            </div>
            <div className='programm__line'></div>
            <div className='lines-right'>
                <div className='line-horizontal'></div>
                <div className='line-horizontal'></div>
                <div className='line-horizontal'></div>
            </div>
            <div className='right'>
                <div className='week'>
                    <span>Неделя №2</span>
                    <p>Красивая часть курса,<br/>которая помогает в успехе</p>
                </div>
                <div className='week'>
                    <span>Неделя №4</span>
                    <p>Красивая часть курса,<br/>которая помогает в успехе</p>
                </div>
                <div className='week'>
                    <span>Неделя №6</span>
                    <p>Красивая часть курса,<br/>которая помогает в успехе</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programm
