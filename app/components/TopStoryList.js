import React from 'react'
import { getLatestStory } from '../helpers/api'
import ListItem from '../components/listItem'

export default class TopStoryList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: null,
			latestStory: []
		}
	}
	componentDidMount() {
		getLatestStory().then((data) => {
			this.setState({
				date: data.data.date,
				latestStory: data.data.stories
			})
		})
	}
	render() {
		let latestStory = this.state.latestStory.map((story, id) => {
			return (
				<ListItem key={id} story={story} />
			)
		})
		return (
			<div>
				<h3>{this.state.date}</h3>
				{latestStory}
			</div>
		)
	}
}