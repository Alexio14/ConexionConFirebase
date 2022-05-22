import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListasComponent } from './listas/listas.component';
import { DetallesComponent } from './detalles/detalles.component';
import { HttpClientModule } from '@angular/common/http';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { UsuariosService } from './servicios/usuarios.service';
import { FootComponent } from './foot/foot.component';
import { SingupComponent } from './singup/singup.component';
import { CargandoComponent } from './cargando/cargando.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListasComponent,
    DetallesComponent,
    EncabezadoComponent,
    LoginComponent,
    FootComponent,
    SingupComponent,
    CargandoComponent,
    FormularioComponent,
    AdministracionComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [LoginGuard,UsuariosService],
  bootstrap: [AppComponent],
  schemas:
  [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
