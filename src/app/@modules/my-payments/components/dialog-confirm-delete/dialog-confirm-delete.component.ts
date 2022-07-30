import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPayments } from 'src/app/@models/interfaces/payments.interface';


@Component({
  selector: 'app-dialog-confirm-delete',
  templateUrl: './dialog-confirm-delete.component.html',
  styleUrls: ['./dialog-confirm-delete.component.scss']
})
export class DialogConfirmDeleteComponent implements OnInit {
  @Output() public emitConfirmDelete = new EventEmitter<any>();
  @Output() public emitCancelDelte = new EventEmitter<any>();
  @Input() public payment!: IPayments;

  constructor() { }

  public ngOnInit(): void {
  }
}
