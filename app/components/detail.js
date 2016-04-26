import React from 'react'
import '../stylesheets/detail_page.scss'

const Detail = ({
	bgUrl,
	title,
	HTMLContent
}) => {
	return (
		<div className='detail-container'>
			<img src={bgUrl} />
			<h2>{title}</h2>
			<div dangerouslySetInnerHTML={HTMLContent}></div>
		</div>
	)
}

export default Detail