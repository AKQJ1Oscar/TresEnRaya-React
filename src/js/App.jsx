import { Button } from 'react-bootstrap';
var React = require('react');
var ReactDOM = require('react-dom');
const Cabecera = require('./Cabecera.jsx');
const Tablero = require('./Tablero.jsx');
const BotonReset = require('./BotonReset.jsx');
const JUGADORX = "jugador 1 → X";
const JUGADOR0 = "jugador 2 → O";
var flag = 0;
var nturno = 1;

var App = React.createClass({
   getInitialState: function() {
      return {
         turno: JUGADORX,
         valores: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
      };
   },
   appClick: function(numeroFila, numberoColumna) {
      let valores = this.state.valores;
      let nuevoValor = this.state.turno === JUGADORX ? 'X' : 'O';
      valores[numeroFila][numberoColumna] = nuevoValor;
      this.setState({
         turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
         valores: this.state.valores
      });
      nturno++;
      if (flag === 0) {
         if (this.checkWin(valores, nuevoValor)) {
            flag = 1;
            nturno = 1;
            var msg = "Ha ganado el " + this.state.turno;
            setTimeout(function(){ alert(msg); }, 100);
         } else if (this.checkTie(valores)) {
            flag = 1;
            nturno = 1;
            setTimeout(function(){ alert("Habéis empatado"); }, 100);
          }
      }
   },
   resetClick: function() {
      var partidaNueva = confirm("¿Quieres empezar una nueva partida?");
      if (partidaNueva) {
         this.setState(this.getInitialState());
         flag = 0;
         nturno = 1;
      }
   },
   checkWin: function(valores, nuevoValor) {
      var nFila = 0;
      var nCol = 0;
      var n = 0;
      while (nFila < this.state.valores.length) {
         while (nCol < this.state.valores.length) {
            if (valores[nFila][nCol] === nuevoValor) {
               n++;
            } else {
               n = 0;
            }
            nCol++;
         }
         if (n === this.state.valores.length) {
            return true;
         }
         nFila++;
         n = 0;
         nCol = 0;
      }
      nFila = 0;
      nCol = 0;
      var n = 0;
      while (nCol < this.state.valores.length) {
         while (nFila < this.state.valores.length) {
            if (valores[nFila][nCol] === nuevoValor) {
               n++;
            } else {
               n = 0;
            }
            nFila++;
         }
         if (n === this.state.valores.length) {
            return true;
         }
         nCol++;
         n = 0;
         nFila = 0;
      }
      nFila = 0;
      n = 0;
      while (nFila < this.state.valores.length) {
         if(valores[nFila][nFila] === nuevoValor) {
            n++;
         } else {
            n = 0;
         }
         nFila++;
      }
      if (n === this.state.valores.length) {
         return true;
      }
      nCol = this.state.valores.length - 1;
      nFila = 0;
      n = 0;
      while (nCol >= 0 && nFila < this.state.valores.length) {
         if (valores[nFila][nCol] === nuevoValor) {
            n++;
         } else {
            n= 0;
         }
         nFila++;
         nCol--;
      }
      if (n === this.state.valores.length) {
         return true;
      }
      return false;
   },
   checkTie: function(valores) {
      var nFila = 0;
      var nCol = 0;
      var empate = true;
      for (nFila = 0; nFila < this.state.valores.length; nFila++) {
         for (nCol = 0; nCol < this.state.valores.length; nCol++) {
            if (valores[nFila][nCol] === '-') {
               empate = false;
            }
         }
      }
      return empate;
   },
   render: function() {
      var texto = "turno del " + this.state.turno;
      var color1 = "#0070C9";
      var color2 = "#E53935";
      if (this.state.turno === JUGADOR0) {
         color1 = "#E53935";
         color2 = "#0070C9";
      }
      return (
         <div>
            <Cabecera texto = { texto }
                      color = { color1 }
                      flag = { flag }
                      nturno = { nturno }
            />
            <Tablero valores = { this.state.valores }
                     manejadorTableroClick = { this.appClick }
                     color = { color2 }
                     flag = { flag }
            />
            <BotonReset manejadorBotonClick = { this.resetClick }/>
         </div>
      )
   }
});
module.exports = App;
