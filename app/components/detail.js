import React from 'react'
import '../stylesheets/detail_page.scss'

export default class Detail extends React.Component {
	render() {
		return (
			<div className='detail-container'>
				<img src={this.props.bgUrl} />
				<h2>{this.props.title}</h2>
				<div dangerouslySetInnerHTML={this.props.HTMLContent}></div>
			</div>
		)
	}
}