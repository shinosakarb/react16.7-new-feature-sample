export const counterActionCreater = (dispatch) => ({
  reset: () => dispatch({ type: 'reset' }),
  increment: () => dispatch({ type: 'increment' }),
  decrement: () => dispatch({ type: 'decrement' })
})
