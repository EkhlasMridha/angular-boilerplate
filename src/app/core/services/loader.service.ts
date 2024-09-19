import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading!: boolean;

  get loading(): boolean {
    return this.isLoading;
  }

  startAppLoader() {
    this.isLoading = true;
  }

  stopAppLoader() {
    this.isLoading = false;
  }
}
