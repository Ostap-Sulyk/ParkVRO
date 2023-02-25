import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h2 className='text-3xl font-bold underline text-center'>Hello Users!</h2>
  )
}

export default App