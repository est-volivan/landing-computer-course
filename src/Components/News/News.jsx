import './News.css'
import facebook from './img/facebook.png'
import Vk from './img/Vk.png'
import instagram from './img/instagram.png'
import youtube from './img/youtube.png'
import React from 'react'

const News = () => {
  return (
    <div className='news'>
        <div className='news__title'>
            <h1>Статьи каждую неделю</h1>
            <p>Больше 90% учеников прошли полный курс и смогли<br />собрать свой первый компьютер</p>
        </div>
        <div className='news__email'>
            <label for="email"></label>
            <input type="email" placeholder="E-mail" id="email"></input>
            <button type='button'>Подписаться</button>
        </div>
        <div className='news__socials'>
            <div className='news__social'><img src={Vk} /></div>
            <div className='news__social'><img src={youtube} /></div>
            <div className='news__social'><img src={facebook} /></div>
            <div className='news__social'><img src={instagram} /></div>
        </div>
    </div>
  )
}

export default News
