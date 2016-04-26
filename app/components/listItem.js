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

const StoryListItem = ({
	story,
	onClick
}) => {
	const imageUrl = story.images ? convertImageUrl(story.images[0]) : ''
	return (
		<div onClick={onClick.bind(null, story.id)}>
			<ListItem
		      leftAvatar={<Avatar src={imageUrl} />}
		      primaryText={story.title} />
		    <Divider inset={true} />
		</div>
	)
}

export default StoryListItem