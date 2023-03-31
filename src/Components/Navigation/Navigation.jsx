import React from 'react'
import Logo from './img/logo.png'
import './Navigation.css';
import { useContext } from 'react';
import { LandingContext } from '../../LandingPage/LandingPage';


const Navigation = () => {
  const [studentsAmount, setStudentsAmount] = useContext(LandingContext)
  return (
    <div>
            <nav>
              <img src={Logo} />
              <div className="nav__links">
                <button type="button">Главная</button>
                <button type="button">Курсы</button>
                <button type="button">Расписание</button>
                <button type="button">Преподаватели</button>
                <button type="button">Рассылка</button>
                <button type="button">Контакты</button>
              </div>
              <button type="button" className="button-rounded">Зайти в кабинет</button>
            </nav>
            <div style={{color: 'white'}}>
              У нас учатся {studentsAmount} учеников
            </div>
    </div>
  )
}

export default Navigation
