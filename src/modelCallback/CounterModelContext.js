import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import CounterModel from './CounterModel.js'

const CounterModelContext = React.createContext()

export function CounterModelProvider(props) {
  let [state, setState] = useState(() => {
    return {
      count: 0,
      counterModel: new CounterModel(0, onModelStateUpdated)
    }
  })

  function onModelStateUpdated(modelState) {
    console.log('onModelStateUdpated called with new state:', modelState)
    // setState({ ...state, ...modelState })
    setState(prevState => {
      return { ...prevState, ...modelState }
    })
  }

  console.log('Rendering provider')
  return (
    <CounterModelContext.Provider value={state}>
      {props.children}
    </CounterModelContext.Provider>
  )
}

export default CounterModelContext
