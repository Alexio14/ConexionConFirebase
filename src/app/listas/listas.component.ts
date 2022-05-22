import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConexionesService } from '../conexiones.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css'],
  providers:[]
})
export class ListasComponent implements OnInit {
  public videojuegos:any;
  public categorias: Array<any> = [];
  public categoria: any;
  public idCategoria: any;
  public columnas = [0,1,2];

  constructor(private ruta: ActivatedRoute, public router: Router,  private info : UsuariosService) { }

  ngOnInit(): void {
    
    this.ruta.params.subscribe(params => {
      this.categoria = params.category;
      if (this.videojuegos) {
        this.compruebaCategoria();
      }
    })
    this.info.getVideojuegosDB().subscribe((res) => {
      this.videojuegos=res;
      this.compruebaCategoria();
    });
    
  }
  compruebaCategoria(){
    this.ruta.params.subscribe(params => {
      this.categoria = params.category;
      
    })
    for (let i = 0; i < this.videojuegos.length; i++) {
      if(this.videojuegos[i].categoria == this.categoria){
        this.idCategoria = i;
      }
    }
  }
  goBack(){
    history.go(-1);
  }
  goDetalles(juego:any){
    this.router.navigate(['inicio/'+this.categoria+'/detalles/'+juego]);
  } 
}


