import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor
 {

  constructor(private loginservice:LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedrequest=req;
     const token=this.loginservice.getToken();
  console.log('inside intercetor');
  console.log(token);
   
   
    if(token!=null){
     
       modifiedrequest=modifiedrequest.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
   
    return next.handle(modifiedrequest);
  }
}
