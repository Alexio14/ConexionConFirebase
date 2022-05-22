import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private ruta: ActivatedRoute,private info : UsuariosService, private router : Router) { }
  public key :any;
  public formularios: Array<any> = [];
  public formulario: any;


  ngOnInit(): void {
    this.info.getFormularioDB().subscribe((res) => {
      this.formularios=res;
      for(let i = 0; i < this.formularios.length; i++){
        if(this.formularios[i].$key==this.key){
          this.formulario = this.formularios[i];
        }
      }
    });
    this.ruta.params.subscribe(params => {
      this.key = params.key;
      
    })

  }
  goAdmin(){
    this.router.navigate(['administracion']);
  }
  confirmar(){
    this.info.editForm(this.formulario);
  }
}
