import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading = false;

  public get isLoading(): boolean {
    return this._isLoading;
  }

  constructor() { }

  public startLoading() {
    this._isLoading = true;
  }

  public finishLoading() {
    this._isLoading = false;
  }
}
