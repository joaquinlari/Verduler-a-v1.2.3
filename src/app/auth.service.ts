import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const loginData = {
      username: username,
      password: password,
    };

    return this.http.post(`${this.baseUrl}/login`, loginData);
  }

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
  
}
