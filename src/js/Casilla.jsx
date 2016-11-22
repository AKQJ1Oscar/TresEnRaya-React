import { Button } from 'react-bootstrap'
var React = require('react');
var ReactDOM = require('react-dom');
let Casilla = React.createClass({
   casillaClick: function() {
      if (this.props.valor === "-") {
         this.props.manejadorClick(
            this.props.indiceFila,
            this.props.indiceColumna
         );
      }
   },
   render: function() {
      var casillaStyle = {
         height: '100px',
         width: '100px',
         fontSize: '48px',
         color: this.props.color
      };
      var className = this.props.valor === "-" ? "btn btn-default clickable" : "btn btn-default no_clickable";
      if (this.props.flag == 1) {
        return(
         <button bsStyle = "default"
                 style = { casillaStyle }
                 className = { className }
                 onClick = { this.casillaClick } disabled>
                 { this.props.valor }
         </button>
        )
      }
      return(
         <button bsStyle = "default"
                 style = { casillaStyle }
                 className = { className }
                 onClick = { this.casillaClick }>
                 { this.props.valor }
         </button>
      )
   }
});
module.exports = Casilla;
