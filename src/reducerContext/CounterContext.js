import React from 'react'
import { useReducer, useState, useEffect } from 'react'
import reducer from './CounterReducer'
import { counterActionsFactory } from './CounterReducer'
import useReducerInContext from '../common/UseReducerInContext'

const CounterContext = React.createContext()

export function CounterProvider(props) {
  let contextValue = useReducerInContext(reducer, counterActionsFactory, {
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
