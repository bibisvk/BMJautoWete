export class Borrowing {
  borrowing_id?: number;
  car_number: number;
  customer_number: number;
  start_date: Date;
  end_date: Date;

  constructor(borrowing: Borrowing) {
    this.borrowing_id = borrowing.borrowing_id;
    this.car_number = borrowing.car_number;
    this.customer_number = borrowing.customer_number;
    this.start_date = borrowing.start_date;
    this.end_date = borrowing.end_date;
  }
}

export class BorrowingZoznam {
  borrowing_id?: number;
  car_number: number;
  customer_number: number;
  start_date: Date;
  end_date: Date;

  constructor(borrowing: Borrowing) {
    this.borrowing_id = borrowing.borrowing_id;
    this.car_number = borrowing.car_number;
    this.customer_number = borrowing.customer_number;
    this.start_date = borrowing.start_date;
    this.end_date = borrowing.end_date;
  }
}
