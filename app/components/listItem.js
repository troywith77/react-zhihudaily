import React from 'react'
import { convertImageUrl } from '../helpers/utils'

export default class ListItem extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<figure>
				<figcaption>{this.props.story.title}</figcaption>
				<image src={convertImageUrl(this.props.story.images[0])} />
			</figure>
		)
	}
}