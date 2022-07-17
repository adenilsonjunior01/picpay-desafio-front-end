import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public form!: FormGroup;
  public toogleTypeInputPassword: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.toogleTypeInputPassword = false;
  }

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      email: ['teste@teste.com', [ Validators.required, Validators.email ]],
      senha: ['123', [ Validators.required ]]
    });
  }

  public autenticate(): void {
    console.log('Click!');
    if (this.form.valid) {
      this.router.navigateByUrl('/my-payments');
    }
  }

  public changeTypeInputPassword():void {
    this.toogleTypeInputPassword = !this.toogleTypeInputPassword;
  }

  public get emailControl(): AbstractControl | null {
    return this.form.controls['email'];
  }

  public get senhaControl(): AbstractControl | null {
    return this.form.controls['senha'];
  }

}
