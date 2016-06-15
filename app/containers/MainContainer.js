import React from 'react'
import Header from '../components/header'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/'

class MainContainer extends React.Component {
	constructor(props, context) {
		super(props, context)
	}
	componentDidMount() {
		this.props.actions.LOAD_THEMES_LIST_DATA()
		this.props.actions.SET_LOCATION(this.props.location)
	}
	componentWillReceiveProps(nextProp) {
		if(this.props.location.pathname !== nextProp.location.pathname) {
			this.props.actions.SET_LOCATION(nextProp.location)
		}
	}
	render() {
		const { actions, UIState, themesList } = this.props
		return (
			<div>
				<Header
					actions={actions}
					UIState={UIState}
					themesList={themesList}
				/>

				{this.props.children}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		UIState: state.UIState,
		themesList: state.themesList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainContainer)