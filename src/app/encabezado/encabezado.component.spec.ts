import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionesService } from '../conexiones.service';
import { EncabezadoComponent } from './encabezado.component';

describe('EncabezadoComponent', () => {
  let component: EncabezadoComponent;
  let fixture: ComponentFixture<EncabezadoComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
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
    }).overrideComponent(EncabezadoComponent, {
    }).compileComponents();
    fixture = TestBed.createComponent(EncabezadoComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('onIniti', () => {
    component.ngOnInit();
  })
});
