import React from 'react'

export default function PostTag({tag}) {
	return (
		<div className='bg-darkgray text-secondary rounded-pill px-3 py-1 border-gray'>
			#{tag}
		</div>
	)
}
