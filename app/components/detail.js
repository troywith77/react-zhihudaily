import React from 'react'
import { getDetail } from '../helpers/api'
import { convertDetailImageUrl } from '../helpers/utils'

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
	escapeHTML() {
		let content = convertDetailImageUrl(this.state.content)
		return {__html: content}
	}
	render() {
		return (
			<div>
				<h2>{this.state.title}</h2>
				<div dangerouslySetInnerHTML={this.escapeHTML()}></div>
			</div>
		)
	}
}