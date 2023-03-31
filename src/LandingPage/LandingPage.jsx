import './LandingPage.css'
import React, { useMemo, useState, useCallback } from 'react'
import { ProgressBar } from '../Components/ProgressBar/ProgressBar'
import { Context } from '../App'
import Navigation from '../Components/Navigation/Navigation'
import ProgressLineComponent from '../Components/ProgressLineComponent/ProgressLineComponent'
import CountdownComponent from '../Components/CountdownComponent/CountdownComponent'
import { sum } from './sum'
import Progress from '../Components/Progress/Progress'
import About from '../Components/About/About'
import Programm from '../Components/Programm/Programm'
import Partners from '../Components/Partners/Partners'
import Job from '../Components/Job/Job'
import Teacher from '../Components/Teacher/Teacher'
import News from '../Components/News/News'
export const LandingContext = React.createContext(3)
const LandingPage = () => {
  const [studentsAmount, setStudentsAmount] = useState(200)
  const [num,setNum] = useState(5)
  const result = useMemo(()=>sum(num), [num])
  const result2 = useCallback(sum(num),[num])
  const [fruit, setFruit] = useState("banana")
  return (
    <LandingContext.Provider value={[studentsAmount, setStudentsAmount]}>
    <div>
      <div className='intro'>
        <Navigation/>
        <CountdownComponent/>
      </div>
      <ProgressLineComponent/>
      {/* <h2>{result} <button onClick={() => setNum(num + 1)}>+</button> </h2>
      <h2>{result2}</h2>
      <h2>{fruit} <button onClick={() => setFruit("orange")}>Click</button> </h2> */}
    </div>
    <div className='main'>
       <About/>
       <Progress/>
       <Job/>
       <Partners/>
       <Programm/>
       <Teacher/>
       <News/>
    </div>
    </LandingContext.Provider>
  )
}

export default LandingPage


