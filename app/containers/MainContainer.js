import React from 'react'
import Header from '../components/header'

export default class MainContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			currentRoute: ''
		}
	}
	componentDidMount() {
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