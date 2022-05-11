import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListasComponent } from './listas/listas.component';
import { DetallesComponent } from './detalles/detalles.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {
    path: "", redirectTo: "login", pathMatch: "full"
  },
  {
    path: "inicio", component: InicioComponent,
    canActivate:[LoginGuard]
  },
  {
    path: "login", component: LoginComponent,
  },
  {
    path: "inicio/:category", component: ListasComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'inicio/:category/detalles/:id', component: DetallesComponent,
    canActivate:[LoginGuard]
  },
  {
    path: "**", redirectTo: "login", pathMatch: "full"
  }
  
  
];

@NgModule({
  imports:[ RouterModule.forRoot(routes, {
    useHash: true,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
