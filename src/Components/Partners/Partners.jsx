import './Partners.css'
import logo from './img/logo.png'
import Ellipse2 from './img/Ellipse2.png'
import React from 'react'

const Partners = () => {
  return (
    <div className='partners'>
      <div className='partners__title'>
        <img src={Ellipse2}/>
        <h1>Партнеры - топовые бренды</h1>
      </div>
      <div className='partners__logos'>
        <div className='logo'><img src={logo}/></div>
        <div className='logo'><img src={logo}/></div>
        <div className='logo'><img src={logo}/></div>
        <div className='logo'><img src={logo}/></div>
        <div className='logo'><img src={logo}/></div>
        <div className='logo'><img src={logo}/></div>
        <div className='logo'><img src={logo}/></div>
        <div className='logo'><img src={logo}/></div>
      </div>
    </div>
  )
}

export default Partners
