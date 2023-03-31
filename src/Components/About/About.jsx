import React from 'react'
import './About.css'
import pc from './img/pc.png'
const About = () => {
  return (
    <div className='about'>
        <div className='about__img'>
            <img src={pc}/>
        </div>
        <div className='about__text'>
            <p>Чем мы занимаемся?</p>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis.</h1>
        </div>
        
    </div>
  )
}

export default About
