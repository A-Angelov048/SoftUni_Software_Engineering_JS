import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/types/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn$$ = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn$$.asObservable();


  constructor(private http: HttpClient) { }


  login(data: User) {
    const { apiUrl } = environment;
    return this.http.post<User>(`${apiUrl}/users/login`, data);
  }

  register(data: User) {
    const { apiUrl } = environment;
    return this.http.post<User>(`${apiUrl}/users/register`, data);
  }

  logout() {
    localStorage.removeItem('userId');
    const { apiUrl } = environment;
    return this.http.get<User>(`${apiUrl}/users/logout`);
  }

  showHideUser() {

    const getUserId = localStorage.getItem('userId');

    if (!!getUserId === true) {
      this.loggedIn$$.next(true);
    } else {
      this.loggedIn$$.next(false);
    }
  }


}
