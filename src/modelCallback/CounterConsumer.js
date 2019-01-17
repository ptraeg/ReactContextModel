import React from 'react'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import CounterModelContext from './CounterModelContext.js'

export default function CounterConsumer(props) {
  const counterContext = useContext(CounterModelContext)

  function onIncrementClick() {
    counterContext.counterModel.increment()
  }

  function onDecrementClick() {
    counterContext.counterModel.decrement()
  }

  console.log('Counter consumer is rendering')
  return (
    <div>
      <label>Counter:</label>
      {counterContext.count}
      <div>
        <button onClick={onIncrementClick}>Increment</button>
        <button onClick={onDecrementClick}>Decrement</button>
      </div>
    </div>
  )
}
