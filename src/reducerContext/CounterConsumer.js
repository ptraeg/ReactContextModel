import React from 'react'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import useContextForComponent from '../common/UseContextForComponent'
import CounterContext from './CounterContext.js'

export function CounterConsumer(props) {
  function onIncrementClick() {
    props.dispatch({ type: 'increment' })
  }

  function onDecrementClick() {
    props.dispatch({ type: 'decrement' })
  }

  console.log('Counter consumer is rendering')
  return (
    <div>
      <label>Counter:</label> {props.state.count}
      <div>
        <button onClick={onIncrementClick}>Increment</button>
        <button onClick={onDecrementClick}>Decrement</button>
      </div>
    </div>
  )
}

export default function CounterConsumerFromContext(props) {
  return useContextForComponent(CounterConsumer, CounterContext, props)
}
