import React from 'react'
import { propTypes } from 'react'
import { getLatestStory, getHistoryStory } from '../helpers/api'
import { reachBottom } from '../helpers/utils'
import StoryListItem from '../components/listItem'
import moment from 'moment'

const styles = {
	container: {
		maxWidth: '700px',
		margin: '0 auto',
	}
}

export default class StoryListContainer extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			isLoading: true,
			Stories: [],
			LoadingDate: moment().subtract(-1, 'days').format('YYYYMMDD')
		}
		this.handleScrollEvent = this.handleScroll.bind(this); //bind(this) !important
		//创建一个变量来保存handler，否则就不能正确的移除，因为每次bind都会产生一个新对象，具体见：https://gist.github.com/Restuta/e400a555ba24daa396cc
	}
	componentDidMount() {
		getLatestStory().then((data) => {
			this.setState({
				isLoading: false,
				Stories: data.data.stories
			})
		})
		window.addEventListener('scroll', this.handleScrollEvent);
	}
	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScrollEvent);
	}
	handleClick(id) {
		this.context.router.push('/detail/' + id)
	}
	handleScroll() {
		if(reachBottom()) {
			console.log('bottom')
			this.setState({
				isLoading: true,
				LoadingDate: moment(this.state.LoadingDate).subtract(1, 'days').format('YYYYMMDD')
			})
			getHistoryStory(this.state.LoadingDate).then((data) => {
				console.log(data)
				this.setState({
					Stories: this.state.Stories.concat(data.data.stories)
				})
			})
    	}
	}
	renderLoading() {
		return this.state.isLoading ? <p style={{textAlign: 'center',margin: '50px 0'}}>Loading...</p> : ''
	}
	render() {
		let Stories = this.state.Stories.map((story, id) => {
			return (
				<StoryListItem key={id} story={story} handleClick={this.handleClick.bind(this)} />
			)
		})
		return (
			<div onScroll={this.handleScroll.bind(this)} style={styles.container}>
				<div>
					{Stories}
				</div>
				{this.renderLoading()}
			</div>
		)
	}
}

StoryListContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}