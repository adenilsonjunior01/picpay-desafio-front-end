import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TypeActionEnum } from 'src/app/@enums';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
  @Output() public showModal = new EventEmitter<TypeActionEnum>();
  @Output() public newPayment = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit(): void {
  }

  public emitEvent(): void {
    this.showModal.emit(TypeActionEnum.ADD);
  }

}
