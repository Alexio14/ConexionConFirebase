import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  public videojuegos:any;
  public admin : any;
  public flecha = "►";
  public mostrarMenu = false;
  public mostrarCategorias = false;
  constructor( private info : UsuariosService, public router: Router) { }

  ngOnInit(): void {
    this.info.getVideojuegosDB().subscribe((res) => {
      this.videojuegos=res;
    });
    
    this.admin = sessionStorage.getItem('usuario') == "admin@admin.admin";
  }
  goCat(cat:string){
    this.router.navigate(['inicio/' + cat]);
  }
  goInicio(){
    this.router.navigate(['inicio']);
  }
  goContacto(){
    this.router.navigate(['inicio/contacto']);
  }
  goLog(){
    this.limpiarcookies();
    sessionStorage.clear();
    this.router.navigate(['login']);  
}
limpiarcookies(){
  document.cookie.split(";").forEach(function(c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")});
}
  goAdmin(){
    this.router.navigate(['administracion']);
  }
  
mostrarCategoria(cat: string) {
    this.mostrarMenu = false;
    this.mostrarCategorias = false;
    this.router.navigate(['inicio/' + cat]);
  }
  setMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }
  setMenuCategorias() {
    this.mostrarCategorias = !this.mostrarCategorias;
    if (this.mostrarCategorias === true) {
      this.flecha = "▼";
    } else {
      this.flecha = "►";
    }
  }
}
