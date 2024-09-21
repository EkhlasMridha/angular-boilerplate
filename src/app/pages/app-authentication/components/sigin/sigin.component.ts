import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreService } from 'utility-services/core.service';
import { LoaderService } from 'utility-services/loader.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading$!: Observable<boolean>;
  signInError$: Subject<string> = new Subject<string>();

  errorObserver$: any = {
    email: '',
    password: '',
  };

  constructor(
    private coreService: CoreService,
    private formBuilder: FormBuilder,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.createForm();
    this.coreService.formService.handleFormError(
      this.loginForm,
      this.errorObserver$,
      this.errorTypeGenerator
    );
  }

  get loading() {
    return this.loaderService.loading;
  }

  errorTypeGenerator(type: string, owner: string) {
    switch (owner) {
      case 'email':
        return 'Please enter a valid email';
      case 'password':
        return 'Password is required';
      default:
        return 'Invalid input';
    }
  }

  createForm() {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  handleLoginError(error: any) {
    if (error.error_description == 'Invalid email/Password') {
      this.signInError$.next('Invalid email or password');
    } else {
      this.signInError$.next('Unknown error occurred');
    }
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.coreService.formService.checkFormStatus(this.loginForm);
      return;
    }
    const result: any = Object.assign({}, this.loginForm.value);
  }
}
