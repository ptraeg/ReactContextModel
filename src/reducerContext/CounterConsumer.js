import React from 'react'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import useContextForComponent from '../common/UseContextForComponent'
import CounterContext from './CounterContext.js'

export function CounterConsumer(props) {
  function onIncrementClick() {
    // props.dispatch({ type: 'increment' })
    props.increment()
  }

  function onDecrementClick() {
    // props.dispatch({ type: 'decrement' })
    props.decrement()
  }

  console.log('Counter consumer is rendering')
  return (
    <div>
      <label>Counter:</label> {props.count}
      <div>
        <button onClick={onIncrementClick}>Increment</button>
        <button onClick={onDecrementClick}>Decrement</button>
      </div>
    </div>
  )
}

export default function CounterConsumerFromContext(props) {
  // Note that this custom hook merges just one context.
  // Feel free to write custom code here instead if you want
  // to merge multiple contexts and/or map prop names or restrict
  // what context properties are passed to a component.  Look at
  // the code for the useContextForComponent hook and you'll see
  // it's very easy to customize this.  Or if you have multiple
  // components that all need to pull in data from multiple contexts
  // you can write a special hook for that case.
  return useContextForComponent(CounterConsumer, CounterContext, props)
}
