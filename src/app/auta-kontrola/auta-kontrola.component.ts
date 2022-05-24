import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AutoZoznam} from "../models/auto.model";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-auta-kontrola',
  templateUrl: './auta-kontrola.component.html',
  styleUrls: ['./auta-kontrola.component.css']
})
export class AutaKontrolaComponent{

  term!: string;

  date = new Date();
  cDate = formatDate(this.date, 'yyyy-MM-dd', 'en-US');

  @Input()
  auta: AutoZoznam[] = [];

  @Output()
  upravAuto: EventEmitter<number> = new EventEmitter<number>();

  uprav(autoId: number): void {
    this.upravAuto.emit(autoId);

  }

}
