import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BorrowingZoznam} from "../models/borrowing.model";
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-borrowing-zoznam',
  templateUrl: './borrowing-zoznam.component.html',
  styleUrls: ['./borrowing-zoznam.component.css']
})
export class BorrowingZoznamComponent {

  term!: string;

  @Input()
  borrowings: BorrowingZoznam[] = [];

  @Output()
  upravBorrowing: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazBorrowing: EventEmitter<number> = new EventEmitter<number>();
  filterCar!: string;
  filterCustomer!: string;

  uprav(borrowingId: number): void {
    this.upravBorrowing.emit(borrowingId);
  }

  zmaz(borrowingId: number): void {
    this.zmazBorrowing.emit(borrowingId);
  }

}

@Pipe({ name: 'filterCar' })
export class FilterCar implements PipeTransform{
  transform(borrowings: BorrowingZoznam[], filterCar:string){
    if(filterCar.length >0 || filterCar != ''){
      return borrowings.filter((borrowing) =>
      { return borrowing.carId.toString() === filterCar
      });
      }
    else {
      return borrowings;
    }
  }
}

@Pipe({ name: 'filterCustomer' })
export class FilterCustomer implements PipeTransform{
  transform(borrowings: BorrowingZoznam[], filterCustomer:string){
    if(filterCustomer.length >0 || filterCustomer != ''){
      return borrowings.filter((borrowing) =>
      { return borrowing.customerId.toString() === filterCustomer
      });
 }
    else {
      return borrowings;
    }
  }
}
