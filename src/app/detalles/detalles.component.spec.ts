import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ConexionesService } from '../conexiones.service';
import { DetallesComponent } from './detalles.component';


const videojuegos: never[] = [];
const id = 1;
const categoria = "";
const juegos = "";


describe('DetallesComponent', () => {
  let component: DetallesComponent;
  let fixture: ComponentFixture<DetallesComponent>;
  let router: Router;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        DetallesComponent
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
    }).overrideComponent(DetallesComponent, {
    }).compileComponents();
    fixture = TestBed.createComponent(DetallesComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('OnInit', () => {
    component['ruta'].params = of({ id, categoria });
    component.id = 0;
    component.categoria = "shooter";
    component['service'].getVideojuegos = () => []
    component.compruebaEquipo = () => { };
    component.ngOnInit();
  })
  it('goBack', () => {
    component['router'].navigate = (): any => { };
    component.goBack();
  })
  it('compruebaJuego', () => {
    component.id = 0;
    component.categoria = "Shooter";
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
    component.compruebaEquipo();
    expect(component.titulo).toEqual("Valorant");
  })
  it('setFavoritos', () => {
    component.videojuegos =
      [{
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
    component.idGame = 0;
    component.id = 0;
    component['service'].setVideojuegos = () => { };
    component.setFavoritos();
  })
});
