import { Component, OnInit } from '@angular/core';
import { ConexionesService } from '../conexiones.service';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  public pass: any;
  public user: any;
  public usuarios: any;
  public videojuegos : Array<any> = [];
  public loading: boolean = false;
  constructor( private info : UsuariosService, private service : ConexionesService, private router:Router) { }
  ngOnInit(): void {
    this.info.getVideojuegosDB().subscribe((res) => {
      this.videojuegos = res;
    })
  }
  iniciar(){
    this.info.login(this.user,this.pass);
    this.service.setStorage(this.user); 
  }
  crear(){
    this.router.navigate(['singup']);
  }
}
