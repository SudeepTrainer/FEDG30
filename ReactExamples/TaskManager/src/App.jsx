import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Hello() {
  return <h1>Hello React!</h1>
}

// JSX syntax
function App() {
  return (
    // <></>//React Fragment
    <div>
      <Hello />
      <Hello />
    </div>
  )
}

export default App
