import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
  @Output() public newPayment = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit(): void {
  }

  public emitEvent(): void {
    this.newPayment.emit(true);
  }

}
