import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const funtionTest = (a: number, b: number) => {
    let value = a + b
    setCount(value)
    return value
  }

  return (

    <div className="App">


      <button onClick={() => funtionTest(1, 2)}>Suma</button>

      <h3>{count}</h3>

    </div>

  )
}

export default App
