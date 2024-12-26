import React from 'react'

function Todo({title,description,count}) {
  return (
    <div>
        <h1>{count}</h1>
        <h1>{title}</h1>
        <h3>{description}</h3>
    </div>
  )
}

export default Todo