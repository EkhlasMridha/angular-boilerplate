import { Injectable } from '@angular/core';
import { TokenDataType } from 'types/common.types';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly accessToken: string = 'at';

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

  hasToken() {
    if ((this.getToken()?.accessToken ?? '') === '') {
      return false;
    }

    return true;
  }
}
