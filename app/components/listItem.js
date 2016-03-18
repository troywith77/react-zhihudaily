import React from 'react'
import { convertImageUrl } from '../helpers/utils'

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center'
	}
}

export default class ListItem extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let story = this.props.story;
		return (
			<figure style={styles.container} onClick={this.props.handleClick.bind(null, story.id)}>
				<image src={convertImageUrl(story.images[0])} />
				<figcaption>{story.title}</figcaption>
			</figure>
		)
	}
}