import React from 'react'
import { propTypes } from 'react'
import { getLatestStory, getHistoryStory } from '../helpers/api'
import { reachBottom } from '../helpers/utils'
import StoryListItem from '../components/listItem'
import moment from 'moment'

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Colors from 'material-ui/lib/styles/colors';
import CircularProgress from 'material-ui/lib/circular-progress';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

const styles = {
	container: {
		maxWidth: '640px',
		margin: '0 auto',
		paddingTop: '64px'
	}
}

class StoryListContainer extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.handleScrollEvent = this.handleScroll.bind(this); //bind(this) !important
		//创建一个变量来保存handler，否则就不能正确的移除，因为每次bind都会产生一个新对象，具体见：https://gist.github.com/Restuta/e400a555ba24daa396cc
	}
	componentDidMount() {
		const { actions } = this.props
		actions.GET_LATEST_DATA()

		//首次加载时除了最新的还加载昨天的，因为高度不够无法触发到底部刷新加载历史内容

		window.addEventListener('scroll', this.handleScrollEvent);
	}
	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScrollEvent);
	}
	handleClick(id) {
		this.context.router.push('/detail/' + id)
	}
	handleScroll() {
		const { actions, UIState } = this.props
		if(reachBottom()) {
			actions.START_LOADING()
			actions.DECREMENT_DATE()
			actions.GET_HISTORY_DATA(UIState.LoadingDate)
    	}
	}
	renderLoading() {
		return this.props.UIState.isLoading ?
		<CircularProgress style={{textAlign: 'center',margin: '50px auto', display: 'block'}} /> :
		 ''
	}
	render() {
		let Stories = this.props.mainList.map((story, id) => {
			return (
				<StoryListItem key={id} story={story} handleClick={this.handleClick.bind(this)} />
			)
		})
		return (
			<div onScroll={this.handleScroll.bind(this)} style={styles.container}>
  				<List subheader="Today">
  					{Stories}
  				</List>
				{this.renderLoading()}
			</div>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {
		mainList: state.mainList,
		UIState: state.UIState
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryListContainer)

StoryListContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

