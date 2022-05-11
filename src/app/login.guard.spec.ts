
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { ConexionesService } from './conexiones.service';
import { LoginGuard } from './login.guard';
import { DetallesComponent } from './detalles/detalles.component';
import { LoginComponent } from './login/login.component';
import { ListasComponent } from './listas/listas.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';


const url = "";
const  usuarios = [
  ["alex@gmail.com","1234"],
  ["dani@gmail.com","4321"],
  ["guille@gmail.com ", "4231"]
];
const coincide : boolean = true;

describe('LoginGuard (isolated)', () => {
 let fixture = TestBed.createComponent(LoginGuard);
 let component: LoginGuard;
 beforeEach(() => {

  TestBed.configureTestingModule({
    imports: [],
    declarations: [
      LoginGuard,DetallesComponent, InicioComponent , 
      LoginComponent, ListasComponent, 
      EncabezadoComponent
    ],
    providers: [
      {
        provide: ActivatedRoute, useValue: {}
      },
      {
        provide: Router, useValue: {
        }
      },
      {
        provide: ConexionesService, useValue: {
          getDatos: () => {coincide},
          getVideojuegos: () => { },
          getUsuarios : () => {
             [
              ["alex@gmail.com","1234"],
              ["dani@gmail.com","4321"],
              ["guille@gmail.com ", "4231"]
            ]
          }
         }
      }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA
      , NO_ERRORS_SCHEMA]
  }).overrideComponent(LoginGuard, {
  }).compileComponents();
  fixture = TestBed.createComponent(LoginGuard);
  component = fixture.debugElement.componentInstance;
});
it('canActivate', () => {
  let path = {} as ActivatedRouteSnapshot;
  let coincides = true;
  function fakeRouterState(url: string): RouterStateSnapshot {
    return {
      url,
    } as RouterStateSnapshot;
  }
  console.log(component.canActivate(path,fakeRouterState(url)))
  component.canActivate(path,fakeRouterState(url));
})
})