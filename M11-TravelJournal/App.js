import React from 'react'
import Nav from './components/nav'
import Post from './components/post'

export default function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Post />
      </div>
    </div>
  )
}

