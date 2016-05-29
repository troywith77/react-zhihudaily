import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ThemeListItem from '../components/listItem'

const styles = {
	container: {
		maxWidth: '640px',
		margin: '0 auto',
		paddingTop: '64px'
	}
}

class ThemesContainer extends Component {
  constructor(props, context) {
  	super(props, context)
  	this.handleClick = this.handleClick.bind(this)
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  componentDidMount() {
  	this.props.actions.GET_THEME_DATA(this.props.params.themeId)
  }
  componentWillReceiveProps(nextProp) {
  	if(this.props.params.themeId !== nextProp.params.themeId) {
  		this.props.actions.GET_THEME_DATA(nextProp.params.themeId)
  	}
  }
  handleClick(id) {
  	this.context.router.push(`/detail/${id}`)
  }
  render() {
  	let Stories = this.props.theme.stories ? this.props.theme.stories.map((story, id) => {
			return (
				<ThemeListItem key={id} story={story} onClick={this.handleClick} />
			)
		})
		:
		null;
    return (
      <div style={styles.container}>
      	<List>
      		{Stories}
				</List>
      </div>
    )
  }
}

ThemesContainer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

ThemesContainer.contextTypes = {
	router: React.PropTypes.object
}

const mapStateToProps = (state) => {
	return {
		theme: state.theme
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemesContainer);
