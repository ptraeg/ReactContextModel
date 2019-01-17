import React from 'react'
import PropTypes from 'prop-types'
import CounterConsumer from './CounterConsumer.js'

import styles from './InnerWrapper.module.scss'

export default function CounterExample(props) {
  console.log('Rendering InnerWrapper')
  return (
    <div className={styles.wrapper}>
      <h3>Inner wrapper</h3>
      <CounterConsumer />
    </div>
  )
}
