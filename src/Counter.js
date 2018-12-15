import React, { useEffect, useReducer } from 'react'
import { reducer, initialState } from './reducers/Counter'
import { counterActionCreater } from './actions/Counter'

export default () => {
  const [state, dispatcher] = useReducer(reducer, initialState)
  const action = counterActionCreater(dispatcher)

  useEffect(() => {console.log('changed!')})
  useEffect(() => {document.title = `Count: ${state.count}`})

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={action.reset}>reset</button>
      <button onClick={action.decrement}>-</button>
      <button onClick={action.increment}>+</button>
    </div>
  )
}
