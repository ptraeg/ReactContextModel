import React from 'react'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import CounterModelContext from './CounterModelContext.js'

import styles from './CounterDisplay.module.scss'

export default function CounterDisplay(props) {
  const counterContext = useContext(CounterModelContext)

  return (
    <div className={styles.wrapper}>
      <h3>Counter Display</h3>
      <p>This component just displays the state of the shared counter</p>
      <label>Counter:</label>
      {counterContext.count}
    </div>
  )
}
