import React, { useContext } from 'react'
import { Context } from '../../App'


const Counter = () => {
    const value = useContext(Context)
  return (
    <div>
      <button onClick={value.increment}>+</button>
    </div>
  )
}

export default Counter
