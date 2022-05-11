import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ConexionesService } from '../conexiones.service';
import { InicioComponent } from './inicio.component';




const videojuegos: never[] = [];
const id = 1;
const categoria = "Shooter";
const juegos = "";


describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
 

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        InicioComponent
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
            getVideojuegos: () => { }
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA
        , NO_ERRORS_SCHEMA]
    }).overrideComponent(InicioComponent, {
    }).compileComponents();
    
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.debugElement.componentInstance;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit', () => {
    component['service'].getVideojuegos= () => [];
    component.ngOnInit();
  });
  it('mostrar', () => {
    var cat = ""
    component['router'].navigate = (): any => { };
    component.mostrar(cat);
  });
  it('navegacionDirecta', () => {
    var cat = "";
    var idCat = 0;
    component['router'].navigate = (): any => { };
    component.navegacionDirecta(cat,idCat);
  });
});
