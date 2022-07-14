import React, { Component } from 'react'
import './App.css'
import { createStore } from 'redux'

//declaring a state as empty array
function rootReducer(state = [], action) {
  switch (action.type) {
    case 'ADD ONE': 
      return state.concat('added one')
    case 'SUBTRACT ONE':
      return state.concat('subtracted one')
    default:
      return state
  }
}

//A reducer is passed into it - a function which contains the switch statement
let store = createStore(rootReducer)
class App extends Component {
  constructor() {
    super()
    store.subscribe(() => {
      console.log("Subscribing to store")
      console.log(store.getState())
    })
  }

  increment() {
    console.log('in store increment method')
    store.dispatch({ type: 'ADD ONE', data: "added one" })
  }

  decrement() {
    console.log('in store decrement method')
    store.dispatch({ type: 'SUBTRACT ONE', data: "subtracted one" })
  }

  render() {
    return (
      <div className="App">
        <h1>Redux counter</h1>
        <button onClick={this.increment}> Increment </button>
        <button onClick={this.decrement}> Decrement </button>
      </div>
    )
  }
}

export default App
