import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  async login(username: string, password: string) {
    try {

      const loginInfo = {
        username: username,
        password: password

      }
      const token = await this.http.post("http://localhost:3000/auth/login", loginInfo).toPromise()
      return true
    } catch (err) {
      return false
    }
  }



}
