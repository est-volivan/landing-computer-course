import React, { useContext } from 'react'
import { Context } from '../../App'

const CounterDisplay = (props) => {
  return (
    <Context.Consumer>
        {
            value => <div>{value}</div>

        }
    </Context.Consumer>
  )
}

export default CounterDisplay
