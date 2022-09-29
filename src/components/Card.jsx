import React from 'react'

export default function Card(props) {
	const {email, name , id} = props
  return (
	<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img src={`https://robohash.org/${id}

`} alt="robots" srcSet="" width={200}/>
		<h2>{name}</h2>
		<p>{email}</p>
	</div>
  )
}
