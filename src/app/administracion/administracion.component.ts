import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  constructor(private info : UsuariosService, private router:Router, private db: AngularFireDatabase ) { }
  public formulario: Array<any> = [];
  public videojuegos: Array<any> = [];

  ngOnInit(): void {
    this.info.getFormularioDB().subscribe((res) => {
      this.formulario=res;
    });
    this.info.getVideojuegosDB().subscribe((res) => {
      this.videojuegos=res;
    });
  }
  navegacionDirecta(cat:string,idCat:number,){
    this.router.navigate(['inicio/' + cat + '/detalles/' + idCat]);
  }
  editar(key:any){
    this.router.navigate(['editar/' + key])
  }
  borrar(id:any){
    this.db.list('/formulario').remove(id);
    alert('Usuario Eliminado');
  }

}
