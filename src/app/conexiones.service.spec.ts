import { ConexionesService } from './conexiones.service';
import {HttpClient} from '@angular/common/http';
import { of } from 'rxjs';

describe('ConexionesService', () => {
  let service : ConexionesService ;
  let http : HttpClient;

  beforeEach(() => { 
       
      service = new ConexionesService(
          {} as any
      );  
      http = new HttpClient(
        {} as any
      )
  });
  it('setDatos' , () => {
    let coincide = "";
    service.setDatos(coincide);
  })
  it('getDatos' , () => {
    let coincide = true;
    service.setDatos(coincide);
    expect(service.getDatos()).toEqual(true);
  })
  it('setVideojuegos', ()=>{
    let videojuegos = [""];
    service.setVideojuegos(videojuegos);
  })
  it('getVideojuegos' , () => {
    let juegos: any[] = [];
    service.getVideojuegos();
    expect(service.getVideojuegos()).toEqual(juegos);
  })
  it('setUsuarios', ()=>{
    let usuarios = [
      ["alex@gmail.com","1234"],
      ["dani@gmail.com","4321"],
      ["guille@gmail.com ", "4231"]
    ];
    service.setUsuarios(usuarios);
  })
  it('getUsuarios', () => {
    let usuarios = [
      ["alex@gmail.com","1234"],
      ["dani@gmail.com","4321"],
      ["guille@gmail.com ", "4231"]
    ];
    service.getUsuarios();
    expect(service.getUsuarios()).toEqual(usuarios);
  })
  it('getData', () => {
    service['http'].get = (): any => "";
    expect(service.getData()).toEqual("");
  })
});
