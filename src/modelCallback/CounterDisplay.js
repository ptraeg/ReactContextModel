import React from 'react'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import CounterModelContext from './CounterModelContext.js'

import styles from './CounterDisplay.module.scss'

// Notice that this component is pulling in the context directly.
// While this works it's recommended to use the approach that was
// used in CounnterConsumer.js where we employ the use of useContextForComponent
// to pull the values from the context into props.   This allows the component
// to be tested without requiring the test to establish a parent context.
export default function CounterDisplay(props) {
  const counterContext = useContext(CounterModelContext)

  return (
    <div className={styles.wrapper}>
      <h3>Counter Display</h3>
      <p>This component just displays the state of the shared counter</p>
      <label>Counter:</label>
      {counterContext.counterModel.state.count}
    </div>
  )
}
