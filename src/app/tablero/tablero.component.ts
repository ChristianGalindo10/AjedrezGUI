import { Component, OnInit } from '@angular/core';
import { Jugador } from '../Jugador';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})

export class TableroComponent implements OnInit {

  jugador1: Jugador = {
    id: 1,
    color: "blanco",
    name: "Cris"
  };
  jugador2: Jugador = {
    id: 1,
    color: "negro",
    name: "Cris2"
  };

  constructor() { }


  ngOnInit(): void {
  }
}

window.onload = () => {
    for (var i = 0; i < 8; i++) {
      var fila = document.createElement("tr");
      //fila.setAttribute("")
      for (var j = 0; j < 8; j++) {
        var celda = document.createElement("td");
        celda.setAttribute("id", "celda" + i + "" + j + "");
        if ((i + j) % 2 == 0) {
          celda.setAttribute("class", "posicion2");
          celda.setAttribute("style", "height:50px;width:50px; background-color:black;");
        } else {
          celda.setAttribute("class", "posicion1");
          celda.setAttribute("style", "height:50px;width:50px; background-color:white;");
        }
        fila.appendChild(celda);
      }
      document.getElementById("tabAje").appendChild(fila);
    }
};


