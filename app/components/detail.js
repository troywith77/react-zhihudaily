import React from 'react'
import '../stylesheets/detail_page.scss'

const Detail = ({
	bgUrl,
	title,
	HTMLContent
}) => {
	return (
		<div className='detail-container'>
			<header className="bg-header" style={{'backgroundImage': `url(${bgUrl})`}}></header>
			<h2>{title}</h2>
			<div dangerouslySetInnerHTML={HTMLContent}></div>
		</div>
	)
}

const styles = {
	image: {
		height: '300px',
		overflow: 'hidden'
	}
}

export default Detail