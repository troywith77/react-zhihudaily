import React from 'react'
import Header from '../components/header'

export default class HeaderContainer extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		)
	}
}