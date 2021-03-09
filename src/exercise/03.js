// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {useState, useContext} from 'react'
// 🐨 create your CountContext here with React.createContext

const CountContext = React.createContext()

const CountProvider = props => {
  const value = useState(0)
  return <CountContext.Provider value={value} {...props} />
}

const useCount = () => {
  const context = useContext(CountContext)
  if (!context)
    throw new Error('na value returned, did you forget the ConteXtProvider?')

  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {1: setCount} = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
