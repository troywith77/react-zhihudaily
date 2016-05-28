import React from 'react'
import Header from '../components/header'

export default class MainContainer extends React.Component {
	constructor(props, context) {
		super(props, context)
	}
	render() {
		return (
			<div>
				<Header />

				{this.props.children}
			</div>
		)
	}
}