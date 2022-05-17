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
    this.router.navigate(['login']);
    sessionStorage.clear();
  }
  goAdmin(){
    this.router.navigate(['administracion']);
  }

}
