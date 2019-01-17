import React from 'react'
import { useMemo, useContext } from 'react'
import CounterConsumer from './CounterConsumer.js'
import InnerWrapper from './InnerWrapper.js'
import CounterDisplay from './CounterDisplay.js'
import CounterModelContext from './CounterModelContext.js'

import styles from './OuterWrapper.module.scss'

export default function OuterWrapper(props) {
  const counterContext = useContext(CounterModelContext)

  function render() {
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

  const memoizedValue = useMemo(() => render(counterContext.count), [
    counterContext.count
  ])

  return memoizedValue
}
