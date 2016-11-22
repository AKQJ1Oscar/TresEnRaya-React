var React = require('react');
var ReactDOM = require('react-dom');
var Cabecera = React.createClass({
   render: function() {
   	var cabeceraStyle = {
         color: this.props.color
      };
   	if (this.props.flag === 1) {
   		cabeceraStyle = {
   			color: "#777"
   		}
   		return (
            <header className = "cabecera" style = { cabeceraStyle }> { "Fin de la partida, haz click en el botón para empezar otra" } </header>
         )
   	}
   	var turn = Math.ceil(this.props.nturno/2);
   	var msg = "" + turn + "º " + this.props.texto;
      return (
         <header className = "cabecera" style = { cabeceraStyle }> { msg } </header>
      )
   }
});
module.exports = Cabecera;
