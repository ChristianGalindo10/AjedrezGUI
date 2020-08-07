import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent implements OnInit {

  comando="Prueba";
  
  constructor() { }

  ngOnInit(): void {
  }

}
