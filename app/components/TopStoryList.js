import React from 'react'
import { propTypes } from 'react'
import { getLatestStory } from '../helpers/api'
import ListItem from '../components/listItem'

export default class TopStoryList extends React.Component {
	constructor(props, context) {
		super(props, context)
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
	handleClick(e) {
		console.log(e)
		this.context.router.push('/detail/' + e)
	}
	render() {
		let latestStory = this.state.latestStory.map((story, id) => {
			return (
				<ListItem key={id} story={story} handleClick={this.handleClick.bind(this)} />
			)
		})
		return (
			<div>
				<h3>{this.state.date}</h3>
				<div>
				{latestStory}
				</div>
			</div>
		)
	}
}

TopStoryList.contextTypes = {
  router: React.PropTypes.object.isRequired
}