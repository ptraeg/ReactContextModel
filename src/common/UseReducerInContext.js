import React from 'react'
import { useReducer, useState, useEffect, useMemo } from 'react'

export default function useReducerInContext(
  Reducer,
  ActionsFactory,
  initialState
) {
  const [state, dispatch] = useReducer(Reducer, initialState)
  const [actions] = useState(ActionsFactory(dispatch))
  // const [contextValue, setContextValue] = useState({ state, actions })
  // useEffect(
  //   () => {
  //     setContextValue({ ...state, ...actions })
  //   },
  //   [state]
  // )
  // return contextValue
  // return { ...state, ...actions }
  return useMemo(
    () => {
      return { ...state, ...actions }
    },
    [state, actions]
  )
}
