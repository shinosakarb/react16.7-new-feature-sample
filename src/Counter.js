import React from 'react'

export default class Counter extends React.Component {
  state = {count: 0}

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState(state => ({count: state.count - 1}))}>-</button>
        <button onClick={() => this.setState(state => ({count: state.count + 1}))}>+</button>
      </div>
    )
  }
}
