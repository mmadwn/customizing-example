import React from 'react'

function FruitsCounter(props) {
  return (
    <div>
       <h1>Total fruits: {props.fruits.length}</h1>
    </div>
  )
}

export default FruitsCounter