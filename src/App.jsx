import React from 'react'
import './App.css'
import Header from './Component/header'
// Make sure Header.jsx exists in the same directory or adjust the path

function App() {
  return (
    <>
      <Header/>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to the Home Page</h1>
        {/* Add more content here */}
      </div>
    </>
  )
}

export default App
