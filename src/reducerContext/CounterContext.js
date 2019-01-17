import React from 'react'
import { useReducer, useState, useEffect } from 'react'
import reducer from './CounterReducer'

const CounterContext = React.createContext()

export function CounterProvider(props) {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const [contextValue, setContextValue] = useState({ state, dispatch })
  useEffect(
    () => {
      setContextValue({ state, dispatch })
    },
    [state]
  )

  console.log('Counter context is rendering...')
  return (
    <CounterContext.Provider value={contextValue}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterContext
