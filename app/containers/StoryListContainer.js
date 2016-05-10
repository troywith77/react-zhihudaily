import React from 'react'
import { propTypes } from 'react'
import { getLatestStory, getHistoryStory } from '../helpers/api'
import { reachBottom } from '../helpers/utils'
import StoryListItem from '../components/listItem'
import moment from 'moment'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';

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

		this.handleClick = this.handleClick.bind(this)
		this.handleScrollEvent = this.handleScroll.bind(this); //bind(this) !important
		/*
		  创建一个变量来保存handler，否则就不能正确的移除，因为每次bind都会产生一个新对象，
		  具体见：https://gist.github.com/Restuta/e400a555ba24daa396cc
		*/
	}
	getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
	componentDidMount() {
		this.props.actions.GET_LATEST_DATA()

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
				<StoryListItem key={id} story={story} onClick={this.handleClick} />
			)
		})
		return (
			<div onScroll={this.handleScroll.bind(this)} style={styles.container}>
  				<List>
  					{Stories}
  				</List>
				{this.renderLoading()}
			</div>
		)
	}
}

StoryListContainer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

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

