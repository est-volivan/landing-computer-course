import './Teacher.css'
import teach1 from './img/teach1.png'
import teach2 from './img/teach2.png'
import teach3 from './img/teach3.png'
import logo7 from './img/logo7.png'
import React from 'react'

const Teacher = () => {
  return (
    <div className='teacher'>
        <div className='teacher__title'>
            <img src={logo7} />
            <h3>Ваши преподаватели</h3>
        </div>
        <div className='teacher__portfolios'>
            <div className='teacher__portfolio'>
                <img src={teach1} />
                <h4>Дмитрий Иванов</h4>
                <p>Специалист по видеокартам</p>
                <button type='button'>Биография</button>
            </div>
            <div className='teacher__portfolio'>
                <img src={teach2} />
                <h4>Дмитрий Иванов</h4>
                <p>Специалист по видеокартам</p>
                <button type='button'>Биография</button>
            </div>
            <div className='teacher__portfolio'>
                <img src={teach3} />
                <h4>Дмитрий Иванов</h4>
                <p>Специалист по видеокартам</p>
                <button type='button'>Биография</button>
            </div>

        </div>
      
    </div>
  )
}

export default Teacher
