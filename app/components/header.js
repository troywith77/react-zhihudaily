import React from 'react'
import MenuItem from 'material-ui/MenuItem';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBarMenu from './appBarMenu'
import AboutDialog from './aboutDialog'
import Drawer from './drawer'

export default class Header extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.handleDrawerClickBtn = this.handleDrawerClickBtn.bind(this)
		this.handleBackClickBtn = this.handleBackClickBtn.bind(this)
		this.handleChangeThemes = this.handleChangeThemes.bind(this)
		this.handleCloseToHome = this.handleCloseToHome.bind(this)
	}
	getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
	handleDrawerClickBtn() {
		this.props.actions.OPEN_DRAWER()
	}
	handleBackClickBtn() {
		this.context.router.goBack()
	}
	handleChangeThemes(id) {
		this.context.router.push(`/theme/${id}`)
	}
	handleCloseToHome() {
		this.context.router.push(`/`)
	}
	render() {
		return (
			<header>
				<AppBarMenu
					style={{position: 'fixed'}}
					handleDrawerClick={this.handleDrawerClickBtn}
					handleBackClick={this.handleBackClickBtn}
					pathname={this.props.UIState.location ? this.props.UIState.location.pathname : null}
					{...this.props.actions}
				/>

				<AboutDialog
					open={this.props.UIState.isDialogOpen}
					{...this.props.actions}
				/>

				<Drawer
					open={this.props.UIState.isDrawerOpen}
					{...this.props.actions}
					list={this.props.themesList}
					onChangeRouter={this.handleChangeThemes}
					handleCloseToHome={this.handleCloseToHome}
				/>
			</header>
		)
	}
}

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}


