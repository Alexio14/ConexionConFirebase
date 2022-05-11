import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ConexionesService } from './conexiones.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: ConexionesService, useValue: {
            getVideojuegos: () => { },
            getData :() => of ({
                videojuegos : []
            }),
            setVideojuegos: () => {}
           }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA
        , NO_ERRORS_SCHEMA]
    }).overrideComponent(AppComponent, {
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });
  it('ngOnInit', ()=>{
    component.ngOnInit();
  })
});



