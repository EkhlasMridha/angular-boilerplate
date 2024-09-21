import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from 'utility-services/core.service';
import { LoaderService } from 'utility-services/loader.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  errorObserver: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  isVisible: boolean = false;

  constructor(
    private coreService: CoreService,
    private formBuilder: FormBuilder,
    private loaderService: LoaderService
  ) {}

  get loading() {
    return this.loaderService.loading;
  }
  errorMessageHandler(name: string, owner: string) {
    switch (owner) {
      case 'firstName':
        return 'First name is required';
      case 'lastName':
        return 'Last name is required';
      case 'email':
        return 'Please enter a valid email';
      case 'password':
        if (name == 'required') {
          return 'Password is required';
        } else {
          return 'Must contain 1 uppercase and 1 lowercase letter, number and minimum length 8';
        }
      case 'confirmPassword':
        if (name == 'required') {
          return 'Confirm password is required';
        } else {
          return 'Password must be same';
        }
      default:
        return 'Invalid input';
    }
  }

  ngOnInit(): void {
    this.signupForm = this.createForm();
    this.coreService.formService.handleFormError(
      this.signupForm,
      this.errorObserver,
      this.errorMessageHandler
    );
    this.signupForm.controls['confirmPassword'].disable();
  }

  createForm() {
    return this.formBuilder.group(
      {
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        firstName: [
          '',
          Validators.compose([Validators.minLength(2), Validators.required]),
        ],
        lastName: [
          '',
          Validators.compose([Validators.minLength(2), Validators.required]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
          ]),
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [this.passwordMustMatch, this.shoudDisable],
      }
    );
  }

  shoudDisable(control: AbstractControl) {
    const firstControl = control.get('password');
    const secondControl = control.get('confirmPassword');

    firstControl?.valueChanges.subscribe((res) => {
      if (res.length < 6 || firstControl.errors) {
        secondControl?.disable({ emitEvent: false, onlySelf: true });
      } else {
        secondControl?.enable({ emitEvent: false, onlySelf: true });
      }
    });

    return null;
  }

  passwordMustMatch(control: AbstractControl): ValidationErrors | null {
    const firstControl = control.get('password');
    const secondControl = control.get('confirmPassword');

    if (firstControl?.value !== secondControl?.value) {
      secondControl?.setErrors({ mustMatch: true });
      return { mustMatch: true };
    }
    if (secondControl?.hasError('mustMatch')) {
      secondControl?.setErrors({ ...secondControl.errors, mustMatch: false });
    }
    return null;
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      this.coreService.formService.checkFormStatus(this.signupForm);
      return;
    }
  }
}
