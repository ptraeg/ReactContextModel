import React from 'react'
import PropTypes from 'prop-types'
import CounterConsumer from './CounterConsumer.js'
import InnerWrapper from './InnerWrapper.js'
import CounterDisplay from './CounterDisplay.js'

import styles from './OuterWrapper.module.scss'

function OuterWrapper(props) {
  console.log('Rendering OuterWrapper')
  return (
    <div className={styles.wrapper}>
      <h3>Outer wrapper</h3>
      <CounterConsumer />
      <InnerWrapper />
      <CounterDisplay />
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  console.log(prevProps, nextProps)
  return true
}

export default React.memo(OuterWrapper, areEqual)
