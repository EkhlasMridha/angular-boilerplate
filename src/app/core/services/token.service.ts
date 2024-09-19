import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtDataPayload, TokenDataType } from 'types/common.types';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly accessToken: string = 'at';
  constructor(private http: HttpClient) {}

  storeToken(token: TokenDataType) {
    localStorage.setItem(this.accessToken, token.accessToken);
  }

  removeToken() {
    localStorage.removeItem(this.accessToken);
  }

  getToken(): TokenDataType {
    let access = localStorage.getItem(this.accessToken);
    let token: TokenDataType = {
      accessToken: access ?? '',
    };

    return token;
  }

  get userRole() {
    let access = localStorage.getItem(this.accessToken);
    if (!access) return;
    const decoded = jwtDecode<JwtDataPayload>(access);
    return decoded.role;
  }

  hasToken() {
    if ((this.getToken()?.accessToken ?? '') === '') {
      return false;
    }

    return true;
  }
}
