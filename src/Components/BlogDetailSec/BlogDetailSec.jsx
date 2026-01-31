import React from 'react'

export default function BlogDetailSec({secTitle, secContent, index}) {
	return (
		<section id={`section-${index + 1}`}>
			<div className='d-flex align-items-center gap-3 mb-4'>
				<div className='bg-orange-dark border-orange px-0 py-2 rounded-3 '>
					<i className='fa-solid fa-camera fa-2xl text-orange'></i>
				</div>
				<h2 className='text-white fs-3 fw-bold mb-0'>{secTitle}</h2>
			</div>
			<p className="text-lightgray fs-md mb-5">{secContent}</p>
		</section>
	)
}
