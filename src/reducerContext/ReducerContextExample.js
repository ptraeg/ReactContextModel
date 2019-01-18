import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { CounterProvider } from './CounterContext.js'
import OuterWrapper from './OuterWrapper.js'

export default function ReducerContextExample(props) {
  return (
    <div>
      <h1>Shared state via reducers and actions in context</h1>
      <p>
        Illustrates multiple component instances accessing state through
        context. In this case lower level components can obtain state values and
        apply state mutations via 'action' methods also found in the context.
      </p>
      <p>
        Examination of the CounterContext.js file will show how the
        'UseReducerAndActions' custom hook is used to combine a reducer, a set
        of 'action' functions, and initial state into a single object that is
        then inserted into the context for consumption by components lower down
        in the component tree. The actions a means of allowing components to
        dispatch actions to the reducer without worrying about remembering
        "magic" string values to dispatch to the reducer.
      </p>
      <p>
        The UseContextForComponent custom hook takes the state values and
        actions from the context and spreads them into props for the component
        to consume. This allows the component to be tested independently from
        relying on a context.
      </p>

      <CounterProvider>
        <OuterWrapper />
      </CounterProvider>
    </div>
  )
}
