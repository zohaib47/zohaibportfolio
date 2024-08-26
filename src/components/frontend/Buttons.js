import React from 'react'

export default function Buttons(props) {
  return (
   <button className={`btn btn-${props.className}`}>{props.text ? props.text : "i am Button"}</button>
  )
}
