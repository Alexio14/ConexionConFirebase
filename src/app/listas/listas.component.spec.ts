import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ConexionesService } from '../conexiones.service';
import { ListasComponent } from './listas.component';

const categoria = "Shooter";

describe('ListasComponent', () => {
  let component: ListasComponent;
  let fixture: ComponentFixture<ListasComponent>;
 
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        ListasComponent
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
    }).overrideComponent(ListasComponent, {
    }).compileComponents();
    
    fixture = TestBed.createComponent(ListasComponent);
    component = fixture.debugElement.componentInstance;
  })

  it('OnInit', () => {
    component['service'].getVideojuegos = () => [];
    component.compruebaCategoria = () => {};
    component['ruta'].params = of({categoria});
    component.ngOnInit();
  })
  it('goBack', () => {
    component['router'].navigate = (): any => { };
    component.goBack();
  })
  it('CompruebaCategoria', () => {
    component.videojuegos = [{
      "categoria": "Shooter",
      "juegos": [{
        "title": "Valorant",
        "year": "2021",
        "description": "Valorant es un videojuego de disparos en primera persona multijugador gratuito desarrollado y publicado por Riot Games... ",
        "imagen": "../assets/valorant.jfif",
        "precio": "Gratis",
        "favoritos": false
      }]
    }];
    component.categoria = "Shooter";
    component.compruebaCategoria();
    expect(component.categoria).toEqual(categoria);
  })
  it('goDetalles', () => {
    var juego = 
    {
      "title": "Valorant",
      "year": "2021",
      "description": "Valorant es un videojuego de disparos en primera persona multijugador gratuito desarrollado y publicado por Riot Games... ",
      "imagen": "../assets/valorant.jfif",
      "precio": "Gratis",
      "favoritos": false
    }
    ;
    component['router'].navigate = (): any => { };
    component.goDetalles(juego);
  })
})