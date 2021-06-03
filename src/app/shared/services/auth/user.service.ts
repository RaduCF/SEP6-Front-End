import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDB, LoginUser } from '../../models/database/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = '/meddit/user';  // URL to user api

  public user$: BehaviorSubject<UserDB> = new BehaviorSubject<UserDB>(null);

  constructor(private http: HttpClient) { }

  public loginUser(userFB: LoginUser) {
    const httpParams = new HttpParams().set('loginUser', JSON.stringify(userFB));

    try {
      const resp = this.http.get<UserDB>(environment.apiConfig.api_local_url + this.userUrl, {params: httpParams})
        .subscribe((data: UserDB) => {
          this.user$.next(data);
          console.log(this.user$);
        });
      console.log(resp);
      return resp;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public signUpUser(userFB: LoginUser) {
    const httpParams = new HttpParams().append('loginUser', JSON.stringify(userFB));
    console.log(httpParams);
    try {
      const resp = this.http.post<UserDB>(environment.apiConfig.api_local_url + this.userUrl, {params: httpParams})
        .subscribe((data: UserDB) => {
          this.user$.next(data);
          console.log(this.user$);
        });
      console.log(resp);
      return resp;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
