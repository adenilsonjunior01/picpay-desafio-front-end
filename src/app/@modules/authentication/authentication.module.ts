import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    InputTextModule,
    SharedModule,
    ButtonModule,
    PasswordModule
  ],
  declarations: [AuthenticationComponent]
})
export class AuthenticationModule { }
