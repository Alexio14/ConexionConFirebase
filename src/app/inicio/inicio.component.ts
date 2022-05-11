import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionesService } from '../conexiones.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public videojuegos: Array<any> = [];
  public videojuegos2: Array<any> = [];
  public categorias: Array<any> = [];
  public initVideogames: Array<any> = [];
  public filas: Array<number> = [0,1];
  

  constructor(private ruta: ActivatedRoute, public router: Router,private info : UsuariosService ) { }

  ngOnInit(): void {
    this.info.getVideojuegosDB().subscribe((res) => {
      this.videojuegos=res;
    });

  }
  mostrar(cat: any) {
    console.log('sdasdasdasdas')
    this.router.navigate(['inicio/' + cat])
  }
  navegacionDirecta(cat:string,idCat:number,){
    this.router.navigate(['inicio/' + cat + '/detalles/' + idCat]);
  }
  
}
