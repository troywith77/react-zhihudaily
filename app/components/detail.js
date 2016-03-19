import React from 'react'

export default class Detail extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<div dangerouslySetInnerHTML={this.props.HTMLContent}></div>
			</div>
		)
	}
}