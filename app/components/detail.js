import React from 'react'
import { getDetail } from '../helpers/api'

export default class Detail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			content: '',
			title: ''
		}
	}
	componentDidMount() {
		getDetail(this.props.params.id).then((data) => {
			console.log(data)
			this.setState({
				title: data.data.title,
				content: data.data.body
			})
		})
	}
	render() {
		let content = this.state.content
		function escapeHTML() {
			return {__html: content}
		}
		return (
			<div>
				<h2>{this.state.title}</h2>
				<div dangerouslySetInnerHTML={escapeHTML()}></div>
			</div>
		)
	}
}