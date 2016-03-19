import React from 'react'
import RasiedButton from 'material-ui/lib/raised-button'

export default class Header extends React.Component {
	constructor(context) {
		super(context)
	}
	handleClickBtn() {
		this.context.router.goBack()
	}
	render() {
		return (
			<div>
				<header>
					<h1>Zhihu Daily</h1>
					<RasiedButton onClick={this.handleClickBtn.bind(this)}>
						Back
					</RasiedButton>
				</header>
			</div>
		)
	}
}

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}