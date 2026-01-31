import React from 'react'

export default function HeaderCard({card}) {
	const {icon, count, desc} = card;
	return (
		<div className='col-md-6 col-lg-3'>
			<div className='bg-darkgray rounded-4 border-gray fs-4 fw-bold p-3 d-flex flex-column justify-content-center align-items-center'>
				<i className={`${icon} text-dark-orange`}></i>
				<span className='text-dark-orange'>{count}</span>
				<span className='text-secondary fs-sm'>{desc}</span>
			</div>
		</div>
	)
}
