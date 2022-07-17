import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { MyPaymentsRoutingModule } from './my-payments-routing.module';
import { MyPaymentsComponent } from './my-payments.component';

@NgModule({
  imports: [
    CommonModule,
    MyPaymentsRoutingModule,
    ButtonModule
  ],
  declarations: [MyPaymentsComponent]
})
export class MyPaymentsModule { }
