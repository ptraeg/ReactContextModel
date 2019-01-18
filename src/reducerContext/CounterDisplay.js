import React from 'react'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import CounterContext from './CounterContext.js'

import styles from './CounterDisplay.module.scss'

export default function CounterDisplay(props) {
  // This example shows referencing the context directly see
  // CounterConsumer.js for an example of pulling the context
  // into props to improve the testability of a component.
  console.log('Rendering CounterDisplay')
  const counterContext = useContext(CounterContext)

  return (
    <div className={styles.wrapper}>
      <h3>Counter Display</h3>
      <p>This component just displays the state of the shared counter</p>
      <label>Counter:</label>
      {counterContext.count}
    </div>
  )
}
