import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/types/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  login(data: User) {
    const { apiUrl } = environment;
    return this.http.post<User>(`${apiUrl}/users/login`, data);
  }

  register(data: User) {
    const { apiUrl } = environment;
    return this.http.post<User>(`${apiUrl}/users/register`, data);
  }
}
