import React from 'react'
import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
        <h2>Error route Not Found</h2>
        <p>Sorry nothing to see here
            <Link to="/home">Go back</Link>
        </p>
    </div>
  )
}

export default NotFound