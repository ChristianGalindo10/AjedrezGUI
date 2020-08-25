import { Component, OnInit, Input } from '@angular/core';
import { Jugador } from '../Jugador';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})

export class TableroComponent implements OnInit {
  
  nombre1: string=this.navCtrl.get('name1');
  nombre2: string=this.navCtrl.get('name2');

  jugador1: Jugador = {
    id: 1,
    color: "blanco",
    name: this.nombre1
  };
  jugador2: Jugador = {
    id: 1,
    color: "negro",
    name: this.nombre2
  };

  filas=[];

  constructor(public navCtrl: NgxNavigationWithDataComponent) { 
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


