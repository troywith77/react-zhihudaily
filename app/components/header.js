import React from 'react'
import RasiedButton from 'material-ui/lib/raised-button'

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<header>
					<h1>Zhihu Daily</h1>
					<RasiedButton>
						Back
					</RasiedButton>
				</header>

				{this.props.children}
			</div>
		)
	}
}