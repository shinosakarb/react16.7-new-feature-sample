import React, { Component, Suspense } from 'react'
import Counter from './Counter'
import TextComponent from './AsyncText'

class App extends Component {
  render() {
    return (
      <>
        <Counter />
        <Suspense fallback={<div>Loading...</div>}>
          <TextComponent text='hello' ms={3000} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <TextComponent text='hello!!!!!' ms={10000} />
        </Suspense>
      </>
    )
  }
}

export default App
