import React from 'react'
import Detail from '../components/detail'
import { getDetail } from '../helpers/api'
import { convertImageUrl } from '../helpers/utils'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class DetailContainer extends React.Component {
	constructor(props) {
		super(props)
	}
	getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
	componentDidMount() {
		this.props.actions.GET_DETAIL_DATA(this.props.params.id)
	}
	componentWillUnmount() {
		this.props.actions.EMPTY_DETAIL()
	}
	escapeHTML() {
		if(this.props.detail.data) {
			const div = document.createElement('div')
			div.innerHTML = this.props.detail.data.body
			const imgs = div.querySelectorAll('img')
			for(var i = 0; i < imgs.length; i++) {
				imgs[i].setAttribute('src', convertImageUrl(imgs[i].getAttribute('src')))
			}
			return {__html: div.innerHTML}
		}
	}
	render() {
		const { detail } = this.props
		return !detail.data ?
		<div style={{padding: '200px'}}><CircularProgress style={{textAlign: 'center',margin: '0 auto', display: 'block'}} /></div>
		:
		<Detail title={detail.data.title}
		HTMLContent={this.escapeHTML()}
		bgUrl={detail.data.image ? convertImageUrl(detail.data.image) : ''} />
	}
}

DetailContainer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return {
		detail: state.detail
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
)(DetailContainer)