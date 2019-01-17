import React from 'react'
import { useMemo, useContext } from 'react'
import CounterConsumer from './CounterConsumer.js'
import InnerWrapper from './InnerWrapper.js'
import CounterDisplay from './CounterDisplay.js'
import CounterModelContext from './CounterModelContext.js'

import styles from './OuterWrapper.module.scss'

function OuterWrapper(props) {
  const counterContext = useContext(CounterModelContext)

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
export default React.memo(OuterWrapper)
