import React, { useState, useEffect, useReducer } from 'react'
import { reducer, initialState } from './reducers/Counter'

export default () => {
  const [state, dispatcher] = useReducer(reducer, initialState)

  useEffect(() => {console.log('changed!')})
  useEffect(() => {document.title = `Count: ${state.count}`})

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatcher({ type: 'reset' })}>reset</button>
      <button onClick={() => dispatcher({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatcher({ type: 'increment' })}>+</button>
    </div>
  )
}
