import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'
import { tap } from 'rxjs/operators';

interface UsernameAvailableResponse {
  available: boolean
}

interface SignupCredentials {
  username: string,
  password: string,
  passConfirmation: string
}

interface SignupResponse {
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com'
  singedin$ = new BehaviorSubject(false)

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(this.rootUrl + '/auth/username', {
      username
    })
  }

  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(
      this.rootUrl + '/auth/signup',
      credentials,
    ).pipe(
      tap(() => {
        this.singedin$.next(true)
      })
    )
  }

  checkAuth() {
    return this.http.get(
      this.rootUrl + '/auth/signedin'
    ).pipe(
      tap(res => {
        console.log(res)
      })
    )
  }
}
