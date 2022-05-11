import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConexionesService } from '../conexiones.service';
import { UsuariosService } from '../servicios/usuarios.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public id: any;
  public categoria: any;
  public videojuegos: any;
  public titulo: any;
  public imagen: any;
  public year: any;
  public descripcion: any;
  public juegos: any;
  public favs = false;

  public idGame: any;
  constructor(private ruta: ActivatedRoute, public router: Router, private service: ConexionesService, private info: UsuariosService) { }
  ngOnInit(): void {

    this.ruta.params.subscribe(params => {
      this.id = params.id;
      this.categoria = params.category;
    })
    this.info.getVideojuegosDB().subscribe((res) => {
      this.videojuegos = res;
      for (let i = 0; i < this.videojuegos.length; i++) {
        if (this.categoria == this.videojuegos[i].categoria) {
          this.idGame = i;
          this.juegos = this.videojuegos[i];          
          this.compruebaEquipo();
        }
      }
     

    })
  }
  compruebaEquipo() {
    this.titulo = this.juegos.juegos[this.id].title;
    this.imagen = this.juegos.juegos[this.id].imagen;
    this.year = this.juegos.juegos[this.id].year;
    this.descripcion = this.juegos.juegos[this.id].description;
    this.favs = this.juegos.juegos[this.id].favoritos;
  }
  goBack() {
    this.router.navigate(['inicio/' + this.categoria]);
  }
  setFavoritos() {
    this.favs = !this.favs;
    for (let k = 0; k < this.videojuegos.length; k++) {
      for (let v = 0; v < this.videojuegos[k].juegos.length; v++) {
        if (this.videojuegos[k].juegos[v].title == this.videojuegos[this.idGame].juegos[this.id].title) {
          this.videojuegos[k].juegos[v].favoritos = this.favs;
          this.info.editJuego(this.videojuegos[k]);
         // this.service.setVideojuegos(this.videojuegos);
        }
      }
    }
  }
}