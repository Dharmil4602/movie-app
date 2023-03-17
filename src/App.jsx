import { useState, useEffect } from 'react'
import { fetchData } from './utils/api'

function App() {

  const apiData = () => {
    fetchData("/movie/popular")
    .then((res) => console.log(res))
  }

  useEffect(() => {
    apiData()
  }, [])
  return (
    <div style={{color: 'white'}} className="App">
      App
    </div>
  )
}

export default App
