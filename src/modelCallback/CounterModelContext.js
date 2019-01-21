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

  // The model calls back into this function whenever the state
  // in the model is updated.  Following this approach we can
  // update the state in this component which will be picked up by
  // the CounterModelContext.Provider and will cause all components
  // that reference this context to re-render.
  function onModelStateUpdated(model) {
    console.log('onModelStateUdpated called with new model:', model)
    setState(prevState => {
      // let newModel = new CounterModel(0, onModelStateUpdated)
      // newModel.state = model.state
      // return { ...prevState, counterModel: newModel }
      return { ...prevState }
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
