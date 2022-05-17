import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public nombre : any;
  public apellidos : any;
  public dni : any;
  public fecha : any;
  public cookies : any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.nombre,this.apellidos);
    console.log(this.dni, this.fecha);
    console.log(this.cookies);
    
  }
  envio(){
    this.nombre = this.nombre;
    this.apellidos = this.apellidos;
    this.dni = this.dni;
    this.fecha = this.fecha;
    this.cookies = this.cookies;
  }

}
