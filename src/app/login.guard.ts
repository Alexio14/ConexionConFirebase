import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { ConexionesService } from './conexiones.service';
@Injectable()
export class LoginGuard implements CanActivate {
  
  
  constructor(private service: ConexionesService ){}
  
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
  Promise<boolean | UrlTree> | boolean | UrlTree {
   let storage = this.service.getStorage();
   
    if(sessionStorage.length == 0){
      return false;  
    }else{
      return true;
    }
  }
}
