import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpPayload, SignInPayload } from '../model/User';
import { APIEndPoint } from '../../core/constants/constants';

// Set headers (adjust content-type based on your API)
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});


@Injectable({
  providedIn: 'root'
})
export class SAuth {
  
constructor(private http: HttpClient) {}

  // Authenticates the user
  register(registerPayload: SignUpPayload): Observable<any> {
    return this.http.post(APIEndPoint.Auth.Register, registerPayload, {
      headers,
      responseType: 'text' as 'json', // ✅ Important fix
    });
  }

  // Login Api
  SignInUser(signInPayload: SignInPayload): Observable<any> {
    return this.http.post<SignInPayload>(
      APIEndPoint.Auth.Login,
      signInPayload,
      { headers }
    );
  }

    // Fetch user info from backend after OAuth login
    getUserInfo(): Observable<any> {
      return this.http.get<any>(APIEndPoint.Auth.OAuth, { headers });
    }
  
    // Redirect to Google login
    loginWithGoogle(): void {
      window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    }
}

