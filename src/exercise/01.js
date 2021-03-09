// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = ({count}, {type, step}) => {
  switch (type) {
    case 'increment': {
      const newCount = count + (typeof step === 'function' ? step() : step)
      return {count: newCount}
    }
    default:
      throw new Error('Unknown action')
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [{count}, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispatch({type: 'increment', step})
  console.log('count', count)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
