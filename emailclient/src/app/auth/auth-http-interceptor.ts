import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modReq = req.clone({
      withCredentials: true
    })
    return next.handle(modReq)
    .pipe(
      filter(val => val.type === HttpEventType.Sent),
      tap(val => {
        console.log('Sent the request')
      })
    )
  }
}
