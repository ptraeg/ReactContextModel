import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { CounterProvider } from './CounterContext.js'
import OuterWrapper from './OuterWrapper.js'

export default function ReducerContextExample(props) {
  return (
    <div>
      <h1>Shared state and dispatcher via useReducer and context</h1>
      <p>
        Illustrates multiple component instances accessing shared state through
        a shared state. This case case the components can access the shared
        state and have access to a dispatcher method that dispatches actions to
        a reducer which mutates the shared state.
      </p>

      <CounterProvider>
        <OuterWrapper />
      </CounterProvider>
    </div>
  )
}
