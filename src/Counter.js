import React, { useEffect, useReducer } from 'react'
import { reducer, initialState } from './reducers/Counter'
import { counterActionCreater } from './actions/Counter'

const useCunter = (initialState) => {
  const [state, dispatcher] = useReducer(reducer, initialState)
  const action = counterActionCreater(dispatcher)

  return [state, action]
}

export default () => {
  const [state, action] = useCunter(initialState)

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
