import React from 'react'
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import ArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

const AppBarIconMenu = ({
	handleClick
}) => {
  	return (
	  <AppBar
	    title="知乎日报"
	    style={{position: 'fixed'}}
	    iconElementLeft={<IconButton onClick={handleClick}><ArrowBack /></IconButton>}
	    iconElementRight={
	      <IconMenu
	        iconButtonElement={
	          <IconButton><MoreVertIcon /></IconButton>
	        }
	        targetOrigin={{horizontal: 'right', vertical: 'top'}}
	        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
	        <MenuItem primaryText="Refresh" />
	        <MenuItem primaryText="Help" />
	      </IconMenu>
	    }/>
	)
}

export default class Header extends React.Component {
	constructor(context) {
		super(context)
		this.handleClickBtn = this.handleClickBtn.bind(this)
	}
	handleClickBtn() {
		this.context.router.goBack()
	}
	render() {
		return (
				<header>
					<AppBarIconMenu
					style={{position: 'fixed'}}
					handleClick={this.handleClickBtn}
					/>
				</header>
		)
	}
}

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}