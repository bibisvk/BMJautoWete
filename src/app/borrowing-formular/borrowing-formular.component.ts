import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {FormControl, FormGroup} from "@angular/forms";
import {Borrowing} from "../models/borrowing.model";

@Component({
  selector: 'app-borrowing-formular',
  templateUrl: './borrowing-formular.component.html',
  styleUrls: ['./borrowing-formular.component.css']
})
export class BorrowingFormularComponent{

  @Input()
  set borrowing(data: Borrowing) {
    if (data) {
      this.naplnForm(data);
    }
  }

  @Output()
  pridajBorrowing = new EventEmitter<Borrowing>();

  @Output()
  upravBorrowing = new EventEmitter<Borrowing>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      borrowing_id: new FormControl(null),
      car_number: new FormControl(null),
      customer_number: new FormControl(null),
      start_date: new FormControl(null),
      end_date: new FormControl(null),

    });
  }

  private naplnForm(borrowing: Borrowing): void {
    this.form.controls['borrowing_id'].setValue(borrowing.borrowing_id);
    this.form.controls["car_number"].setValue(borrowing.car_number);
    this.form.controls["customer_number"].setValue(borrowing.customer_number);
    this.form.controls["start_date"].setValue(borrowing.start_date);
    this.form.controls["end_date"].setValue(borrowing.end_date);

  }

  public pridaj(): void {
    this.pridajBorrowing.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravBorrowing.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }

}
