import React, { useState, useEffect } from 'react'

export default () => {
  const [count, setCount] = useState(0)

  useEffect(() => {console.log('changed!')})
  useEffect(() => {document.title = `Count: ${count}`})

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
