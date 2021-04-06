import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IAccount } from './account.types';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<IAccount>;
  public user: Observable<IAccount>;

  constructor() {
    this.userSubject = new BehaviorSubject<IAccount>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): IAccount {
    return this.userSubject.value;
  }

  public login(creadentials): boolean {
    if (creadentials.email === 'kimjanssens21@gmail.com' && creadentials['current-password'] === 'password') {
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        email: creadentials.email,
        password: creadentials['current-password'],
        firstname: 'Kim',
        lastname: 'Janssens',
        token: 'mjfezmefknezùkgfezùgkzùgk'
      }));
      this.userSubject.next({
        id: '1',
        email: creadentials.email,
        password: creadentials['current-password'],
        firstname: 'Kim',
        lastname: 'Janssens',
        token: 'mjfezmefknezùkgfezùgkzùgk'
      });

      return true;
    }

    return false;
  }
}
