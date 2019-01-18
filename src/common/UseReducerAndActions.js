import React from 'react'
import { useReducer, useState, useEffect, useMemo } from 'react'

export default function useReducerAndActions(
  Reducer,
  ActionsFactory,
  initialState
) {
  // We use the standard useReducer hook to create the reducer and
  // populate it with initial state.  Note the dispatch method returned
  // from this is not directly placed into the context.  Instead it's
  // passed to the ActionsFactory which wraps the dispatch method in a
  // series of concrete method names which internally invoke the dispatch
  // method.  This eliminates the need for the lower level components to
  // know what magic string values to pass to the dispatch method or even
  // the fact that a reducer is being used to mutate the state.
  const [state, dispatch] = useReducer(Reducer, initialState)

  // We store the created actions factory in state so that it never has to
  // be created again.  Note we don't even need the "setter" that is normally
  // returned from useState() because we'll never need to change this again
  const [actions] = useState(ActionsFactory(dispatch))

  // useMemo is employed here to cache the object returned from this hook so
  // the object containing state values and actions is only recreated when the
  // state changes (as a result of the reducer responding to a mutation request
  // dispatched to it).
  return useMemo(
    () => {
      return { ...state, ...actions }
    },
    [state]
  )

  /********
   * The following block of code is a former approach for caching the object
   * returned from this function.  However changes in state from the reducer
   * would have fired 2 updates which makes this approach less performant
   * than the useMemo approach which is currently employed.  It is retained
   * here for illustrative purposes only.
   */
  // const [contextValue, setContextValue] = useState({ ...state, ...actions })
  // useEffect(
  //   () => {
  //     setContextValue({ ...state, ...actions })
  //   },
  //   [state]
  // )
  // return contextValue
}
