import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import CounterModel from './CounterModel.js'

const CounterModelContext = React.createContext()

export function CounterModelProvider(props) {
  let [state, setState] = useState(() => {
    return {
      counterModel: new CounterModel(0, onModelStateUpdated)
    }
  })

  function onModelStateUpdated(model) {
    console.log('onModelStateUdpated called with new model:', model)
    setState(prevState => {
      let newModel = new CounterModel(0, onModelStateUpdated)
      newModel.state = model.state
      return { ...prevState, counterModel: newModel }
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
