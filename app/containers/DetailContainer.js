import React from 'react'
import Detail from '../components/detail'
import { getDetail } from '../helpers/api'
import { convertImageUrl, convertDetailImageUrl } from '../helpers/utils'

export default class DetailContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			content: '',
			title: '',
			bgUrl: ''
		}
	}
	componentDidMount() {
		getDetail(this.props.params.id).then((data) => {
			console.log(data)
			this.setState({
				title: data.data.title,
				content: data.data.body,
				bgUrl: data.data.image
			})
		})
	}
	escapeHTML() {
		let content = convertDetailImageUrl(this.state.content)
		return {__html: content}
	}
	render() {
		return (
			<Detail title={this.state.title}
			HTMLContent={this.escapeHTML()}
			bgUrl={convertImageUrl(this.state.bgUrl)} />
		)
	}
}