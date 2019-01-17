import React from 'react'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import useContextForComponent from '../common/UseContextForComponent'
import CounterModelContext from './CounterModelContext.js'

export function CounterConsumer(props) {
  function onIncrementClick() {
    props.counterModel.increment()
  }

  function onDecrementClick() {
    props.counterModel.decrement()
  }

  console.log('Counter consumer is rendering')
  return (
    <div>
      <label>Counter:</label>
      {props.count}
      <div>
        <button onClick={onIncrementClick}>Increment</button>
        <button onClick={onDecrementClick}>Decrement</button>
      </div>
    </div>
  )
}

export default function CounterConsumerFromContext(props) {
  return useContextForComponent(CounterConsumer, CounterModelContext, props)
}
