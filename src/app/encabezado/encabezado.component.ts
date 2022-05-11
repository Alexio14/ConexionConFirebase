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
  constructor( private info : UsuariosService, public router: Router) { }

  ngOnInit(): void {
    this.info.getVideojuegosDB().subscribe((res) => {
      this.videojuegos=res;
    });
  }
  goCat(cat:string){
    this.router.navigate(['inicio/' + cat]);
  }
  goInicio(){
    this.router.navigate(['inicio']);
  }

}
