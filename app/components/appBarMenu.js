import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const AppBarMenu = ({
	handleDrawerClick,
	handleBackClick,
	OPEN_ABOUT_DIALOG,
	pathname
}) => {
		const path = pathname ? pathname : ''
		const leftElement = (path.indexOf('/detail') > -1) ?
			<IconButton onClick={handleBackClick}><ArrowBackIcon /></IconButton>
			:
			<IconButton onClick={handleDrawerClick}><ExpandMoreIcon /></IconButton>

  	return (
	  <AppBar
	    title="知乎日报"
	    titleStyle={{textAlign: 'center'}}
	    style={{position: 'fixed'}}
	    iconElementLeft={
	    	leftElement
	    }
	    iconElementRight={
	      <IconMenu
	        iconButtonElement={
	          <IconButton><MoreVertIcon /></IconButton>
	        }
	        targetOrigin={{horizontal: 'right', vertical: 'top'}}
	        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
	        <MenuItem primaryText="About" onTouchTap={OPEN_ABOUT_DIALOG} />
	      </IconMenu>
	    }/>
	)
}

export default AppBarMenu