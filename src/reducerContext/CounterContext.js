import React from 'react'
import { useReducer, useState, useEffect } from 'react'
import reducer from './CounterReducer'
import { counterActionsFactory } from './CounterReducer'
import useReducerAndActions from '../common/UseReducerAndActions.js'

const CounterContext = React.createContext()

export function CounterProvider(props) {
  // The useReducerAndActions custom hook will retain the contextValue it
  // returns with the state and actions merged as members of the object.
  // The object reference will only change if the state changes therefore
  // components lower in the component tree will only re-render when the
  // object reference (containing the state) changes.
  let contextValue = useReducerAndActions(reducer, counterActionsFactory, {
    count: 0
  })

  console.log('Counter context is rendering...')
  return (
    <CounterContext.Provider value={contextValue}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterContext
