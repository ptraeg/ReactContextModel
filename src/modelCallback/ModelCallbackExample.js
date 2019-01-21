import React from 'react'
import PropTypes from 'prop-types'
import { CounterModelProvider } from './CounterModelContext.js'
import OuterWrapper from './OuterWrapper.js'

export default function ModelCallbackExample(props) {
  console.log('Rendering ModelCallbackExample')
  return (
    <div>
      <h1>Shared model state via context</h1>
      <p>
        Illustrates multiple component instances accessing shared state through
        a common model. The model is accessible via the React context via a
        counterModel property we place in an object in the CounterModelContext.
      </p>

      <CounterModelProvider>
        <OuterWrapper />
      </CounterModelProvider>
    </div>
  )
}
