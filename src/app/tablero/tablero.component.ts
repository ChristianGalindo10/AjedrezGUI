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

  filas=[];

  constructor() { 
    for(var i=0;i<8;i++){
      this.filas[i] = [];
      for(var j=0;j<8;j++){
        if ((i + j) % 2 == 0) {
          this.filas[i][j]='posicion1';
        } else {
          this.filas[i][j]='posicion2';
        }
      }
    }
  }


  ngOnInit(): void {
  }
}


