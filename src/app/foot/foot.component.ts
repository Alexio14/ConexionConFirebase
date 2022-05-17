import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  constructor(private info : UsuariosService, public router: Router) { }

  ngOnInit(): void {
  }
 
  arriba(){
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  }
  goCat(){
    this.router.navigate(['inicio']);
  }
  goInicio(){
    this.router.navigate(['inicio']);
  }
  goContacto(){
    this.router.navigate(['inicio/contacto']);
  }
}
