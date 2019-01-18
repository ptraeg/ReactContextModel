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

// Note the use of React.memo here.  It is analagous to a React PureComponent and
// ensures this component will only be re-rendered if the props change.  Note that
// when the state mutates and is pushed down from CounterContext this component does
// not need to re-render.
export default React.memo(OuterWrapper)
