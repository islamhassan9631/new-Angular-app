import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NameofserviceService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:NameofserviceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.http.getToken()

    let newReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    })

    return next.handle(newReq)
  }
}
