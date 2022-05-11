import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionesService {

  constructor(private http: HttpClient) { }

  [x: string]: any;
  public id:any;
  private baseUrl = '../../assets/videojuegos.json';
  private usuariosSubject = new Subject<any>();
  public usuariosObservable$ = this.usuariosSubject.asObservable();
  private coincide:any;
  private coincideSubject = new Subject<any>();
  public coincideObservable$ = this.coincideSubject.asObservable();
  public user : any;
  public pass : any;
  ///////////////////////////////////////////////////////////////////////////

  setStorage(email:string,pass:any){
    this.user = email;
    this.pass = pass;
    sessionStorage.setItem(this.user,this.pass);
  }
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////
  setDatos(coincide:any){
    this.coincide=coincide;
    this.coincideSubject.next(this.coincide);
  } 
  getDatos(){
    return this.coincide;
  }
setUsuarios(usuarios:Array <any>){
  this.usuarios=usuarios;
  this.usuariosSubject.next(this.usuarios);
} 
getUsuarios(){
  return this.usuarios;
}
///////////////////////////////////////////////////////
  getData() {
    return this.http.get(this.baseUrl);
  }
}