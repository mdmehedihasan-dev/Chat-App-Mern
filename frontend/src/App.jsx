import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     
      <div className="card">
       
        <p>
        count is {count}
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          click
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          click
        </button>
      </div>
     
    </>
  )
}

export default App
