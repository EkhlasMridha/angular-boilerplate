import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export type TestType = 'reading' | 'listening' | 'writting';

export const STORAGE_TOKEN = new InjectionToken<TestType>('STORAGE_TOKEN');

@Injectable()
export class StorageService<T> {
  private _storableObject: T[] = [];

  constructor(
    @Inject(STORAGE_TOKEN) private testType: TestType,
    private route: ActivatedRoute
  ) {
    this._storableObject = this.readParseStorageData();
  }

  set storeData(data: T) {
    this._storableObject.push(data);
  }

  get data() {
    return this._storableObject;
  }

  set replaceAllData(data: T[]) {
    this._storableObject = data;
  }

  get token() {
    return `${this.testType}#${this.route.snapshot.params['id']}`;
  }

  get examType() {
    return this.testType;
  }

  persistData() {
    localStorage.setItem(this.token, JSON.stringify(this._storableObject));
  }

  clear() {
    localStorage.removeItem(this.token);
  }

  private readParseStorageData(): T[] {
    let data: T[] = JSON.parse(localStorage.getItem(this.token) ?? '[]');
    return data;
  }
}
