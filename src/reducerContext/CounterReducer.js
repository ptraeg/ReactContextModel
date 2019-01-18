const initialState = { count: 0 }

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
