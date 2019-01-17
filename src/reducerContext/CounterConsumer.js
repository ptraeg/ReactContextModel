import React from 'react'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import CounterContext from './CounterContext.js'

export default function CounterConsumer(props) {
  const counterContext = useContext(CounterContext)

  function onIncrementClick() {
    counterContext.dispatch({ type: 'increment' })
  }

  function onDecrementClick() {
    counterContext.dispatch({ type: 'decrement' })
  }

  console.log('Counter consumer is rendering')
  return (
    <div>
      <label>Counter:</label> {counterContext.state.count}
      <div>
        <button onClick={onIncrementClick}>Increment</button>
        <button onClick={onDecrementClick}>Decrement</button>
      </div>
    </div>
  )
}
