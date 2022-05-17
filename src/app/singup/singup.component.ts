import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionesService } from '../conexiones.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  public pass: any;
  public user: any;

  constructor(private info : UsuariosService, private router:Router, private service : ConexionesService) { }

  ngOnInit(): void {
  }

  crear(){
  this.info.emailSignup(this.user,this.pass);
  this.service.setStorage(this.user);
}
}
