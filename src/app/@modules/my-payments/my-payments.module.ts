import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

import { SharedModule } from './../../@shared/shared.module';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { TablePaymentsComponent } from './components/table-payments/table-payments.component';
import { MyPaymentsRoutingModule } from './my-payments-routing.module';
import { MyPaymentsComponent } from './my-payments.component';

@NgModule({
  imports: [
    CommonModule,
    MyPaymentsRoutingModule,
    ButtonModule,
    TableModule,
    CardModule,
    InputTextModule,
    PaginatorModule,
    SharedModule,
    DialogModule
  ],
  declarations: [MyPaymentsComponent, AddPaymentComponent, TablePaymentsComponent]
})
export class MyPaymentsModule { }
