import React from 'react'
import { Link } from 'react-router-dom'

function Nopage() {
  return (
    <div>
        <h1>Error 404</h1>
        <p>Page not found.</p>
        <Link to="/">Go to home</Link>
    </div>
  )
}

export default Nopage