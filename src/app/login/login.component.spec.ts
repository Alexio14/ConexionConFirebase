import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ConexionesService } from '../conexiones.service';
import { LoginComponent } from './login.component';

const  usuarios = [
  ["alex@gmail.com","1234"],
  ["dani@gmail.com","4321"],
  ["guille@gmail.com ", "4231"]
];
const user = "alex@gmail.com";
const pass = "1234";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        LoginComponent
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
    }).overrideComponent(LoginComponent, {
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit', () => {
    component['service'].getUsuarios= () => [];
    component['service'].coincideObservable$ = of({});
    component.ngOnInit();
  });
  it('validar', () => {
    component['service'].setDatos= () => [];
    jest.spyOn(window,"alert").mockImplementation();
    component['service'].coincideObservable$ = of({});
    component.usuarios = usuarios;
    component.user=user;
    component.pass=pass;
    component['router'].navigate = (): any => { };
    component.validar();
  });
  it('validar2', () => {
    component['service'].setDatos= () => [];
    jest.spyOn(window,"alert").mockImplementation();
    component['service'].coincideObservable$ = of({});
    component.usuarios = usuarios;
    component.user="";
    component.pass="";
    component['router'].navigate = (): any => { };
    component.validar();
  });
});
