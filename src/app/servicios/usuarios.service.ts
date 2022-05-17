import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { ConexionesService } from '../conexiones.service';
import { map } from 'rxjs/operators';
import { Videojuego } from '../Interfaces/videojuego';
import { Categoria } from '../Interfaces/categorias';

@Injectable()
export class UsuariosService {

  constructor(
    private afAuth: AngularFireAuth, private service: ConexionesService, private router: Router, private db: AngularFireDatabase
  ) {
  }
  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.service.setDatos(true);
        this.router.navigate(['/inicio']);
      })
      .catch(err => {
        alert('El Usuario o la contraseña son incorrectos');
      });
  }
  getVideojuegosDB() {
    let videojuegosDB: AngularFireList<Videojuego> = this.db.list('/videojuegos', (res) =>
      res.orderByPriority()
    );
    return videojuegosDB.snapshotChanges().pipe(

      map((changes) => {
        return changes.map((c) => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }));
      })
    );
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.service.setDatos(true);
        this.router.navigate(['/inicio']);
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }
  editJuego(categoriaMod:any){
    const $key =categoriaMod.$key;
    delete categoriaMod.$key;
    this.db.list('/videojuegos').update($key,categoriaMod);
  }
}