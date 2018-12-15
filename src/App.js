import React, { Component, Suspense } from 'react'
import Counter from './Counter'

const TextComponent = React.lazy(() => import('./AsyncText'))
class App extends Component {
  render() {
    return (
      <>
        <Counter />
        <Suspense fallback={<div>Loading...</div>}>
          <TextComponent />
        </Suspense>
      </>
    )
  }
}

export default App
