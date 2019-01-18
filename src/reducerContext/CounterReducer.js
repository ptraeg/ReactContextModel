const initialState = { count: 0 }

// This is a classic reducer example pulled directly from the useReducer() documentation
export default function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state
  }
}

// The counterActions offer an alternative way to dispatch actions to the reducer
// using this approach the components requesting state mutations do not have to
// rely on "magic" strings to send commands to the reducer.
export function counterActionsFactory(dispatch) {
  return {
    increment() {
      dispatch({ type: 'increment' })
    },
    decrement() {
      dispatch({ type: 'decrement' })
    }
  }
}
