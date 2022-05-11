import { Component, OnInit } from '@angular/core';
import { ConexionesService } from './conexiones.service';
import { UsuariosService } from './servicios/usuarios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: ConexionesService, private info : UsuariosService) { }
  public videojuegos: Array<any> = [];
  public categorias: Array<any> = [];

  ngOnInit(): void {
    this.info.getVideojuegosDB().subscribe((res) => {
      this.videojuegos = res;
    })
  }
}