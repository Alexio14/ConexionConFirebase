import { ɵparseCookieValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public nombre: any;
  public apellidos: any;
  public dni: any;
  public fecha: any;
  public sexo: any;
  public cookies: any;
  public key: any;
  public imagen: any;
  public año: any;
  public fechaActual: any = new Date();
  public imagensz: any;
  public cumpleaños:Array<any> = [];


  constructor(private servicio: UsuariosService, private router: Router, http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.fechaActual)
    console.log(this.cookies);
  }
  goBack() {
    history.go(-1);
  }
  validaDNI() {
    var valor = this.dni;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    if (!(/^\d{8}[A-z]$/.test(valor))) {
      alert("El DNI introducido no es correcto");
      return false;
    }
    if (valor.charAt(8) != letras[(valor.substring(0, 8)) % 23]) {

      return true;
    }
    return true;
  }

  imagenSize() {
    this.imagensz = document.getElementById("imagensubida");
    if (this.imagensz.value != "") {
      if (this.imagensz.files[0].size > 2000000) {
        alert('El archivo supera los 2Mb.');
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
  sicookies(){
    if(this.cookies==true){
      document.cookie ="nombre=" + this.nombre+";";
      document.cookie = "apellidos=" + this.apellidos+";";
      document.cookie = "dni=" + this.dni+";";
      document.cookie = "fecha=" + this.fecha+";";
      document.cookie = "sexo=" + this.sexo+";";
     
    }else{
      sessionStorage.setItem('nombre', this.nombre);
      sessionStorage.setItem('apellidos', this.apellidos);
      sessionStorage.setItem('dni', this.dni);
      sessionStorage.setItem('fecha', this.fecha);
      sessionStorage.setItem('sexo', this.sexo);
    }
  }
  envio() {
    this.sicookies();
    let mes = this.fechaActual.getMonth() + 1;
    let year = this.fechaActual.getFullYear();
    let day = this.fechaActual.getDate();

    console.log(this.nombre)

    if ((this.nombre == undefined) || (this.apellidos == undefined) || (this.fecha == undefined)) {
      alert("No puedes dejar ningun campo vacio");
    }else{
      let cumple = this.fecha.split("-");
      this.cumpleaños=cumple
    }
    let yearCumple = this.cumpleaños[0];
      let mesCumple = this.cumpleaños[1];
      let diaCumple = this.cumpleaños[2];

      if ((year - yearCumple) < 18) {
        alert("No eres mayor de edad");
      } else if ((year - yearCumple == 18) && (mes < mesCumple) || (mes == mesCumple && day < diaCumple)) {
        alert("No eres mayor de edad");
      }
      else if (this.validaDNI() && this.imagenSize()) {
        this.servicio.addFormularioDB({
          nombre: this.nombre,
          apellidos: this.apellidos,
          dni: this.dni,
          sexo: this.sexo,
          fecha: this.fecha
        });
        this.nav();
      }
  }
  nav() {
    alert("Tu participacion ha sido regitrada correctamente!!")
     this.router.navigate(['inicio']);
  }

}
