import { Injectable, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'utility-services/form.service';
import { IconService } from 'utility-services/icon.service';
import { NavTracerService } from 'utility-services/nav-tracer.service';
import { TokenService } from 'utility-services/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private _iconService!: IconService;
  private _formService!: FormService;
  private _navTracerService!: NavTracerService;
  private _tokenService!: TokenService;

  public get iconService(): IconService {
    if (!this._iconService) {
      this._iconService = this._injector.get(IconService);
    }
    return this._iconService;
  }

  public get formService(): FormService {
    if (!this._formService) {
      this._formService = this._injector.get(FormService);
    }
    return this._formService;
  }

  public get navTracerService(): NavTracerService {
    if (!this._navTracerService) {
      this._navTracerService = this._injector.get(NavTracerService);
    }

    return this._navTracerService;
  }

  public get tokenService(): TokenService {
    if (!this._tokenService) {
      this._tokenService = this._injector.get(TokenService);
    }
    return this._tokenService;
  }

  constructor(private _injector: Injector) {}

  handleFormError(
    formGorup: FormGroup,
    errorObservers: Record<string, Observable<any>>,
    errorTypeGenerator: (type: string, owner: string) => any
  ) {
    return this.formService.handleFormError(
      formGorup,
      errorObservers,
      errorTypeGenerator
    );
  }

  checkFormStatus(formGroup: FormGroup) {
    this.formService.checkFormStatus(formGroup);
  }

  loadIcons(iconList: string[]) {
    this.iconService.loadIcons(iconList);
  }
}
