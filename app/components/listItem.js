import React from 'react'
import { convertImageUrl } from '../helpers/utils'

import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center'
	}
}

// export default class ListItem extends React.Component {
// 	constructor(props) {
// 		super(props)
// 	}
// 	render() {
// 		let story = this.props.story;
// 		let imageUrl = story.images ? convertImageUrl(story.images[0]) : ''
// 		return (
// 			<figure style={styles.container} onClick={this.props.handleClick.bind(null, story.id)}>
// 				<image src={imageUrl} />
// 				<figcaption>{story.title}</figcaption>
// 			</figure>
// 		)
// 	}
// }

export default class StoryListItem extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let story = this.props.story;
		let imageUrl = story.images ? convertImageUrl(story.images[0]) : ''
		return (
			<div onClick={this.props.handleClick.bind(null, story.id)}>
				<ListItem
			      leftAvatar={<Avatar src={imageUrl} />}
			      primaryText={story.title} />
			    <Divider inset={true} />
			</div>
		)
	}
}

const ListMessages = (props) => (
	<div>
	    <ListItem
	      leftAvatar={<Avatar src={props.avatar} />}
	      primaryText={props.title} />
	    <Divider inset={true} />
	</div>
);
