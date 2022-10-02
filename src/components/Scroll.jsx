import React from 'react'

export default function Scroll(props) {
  return (
    <div style={{overflow: 'scroll', border: '2px solid black', height: '500px'}}>{props.children}</div>
  )
}
