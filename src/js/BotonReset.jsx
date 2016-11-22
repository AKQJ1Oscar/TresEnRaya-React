import { Button } from 'react-bootstrap';
var React = require('react');
var ReactDOM = require('react-dom');

let BotonReset = React.createClass({
	botonClick: function() {
		this.props.manejadorBotonClick();
	},
	render: function() {
		return (
			<Button className = "botonReset btn btn-primary" onClick = { this.botonClick }>
				Partida nueva
			</Button>
		)
	}
});
module.exports = BotonReset;