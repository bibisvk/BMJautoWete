import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Auto} from "../models/auto.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auto-formular',
  templateUrl: './auto-formular.component.html',
  styleUrls: ['./auto-formular.component.css']
})
export class AutoFormularComponent {

  @Input()
  set auto(data: Auto) {
    if (data) {
      this.naplnForm(data);
    }
  }

  @Output()
  pridajAuto = new EventEmitter<Auto>();

  @Output()
  upravAuto = new EventEmitter<Auto>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      cena: new FormControl(null),
      dvere: new FormControl(null),
      osoby: new FormControl(null),
      kufor: new FormControl(null),
      bezpecnost: new FormControl(null),
      EK: new FormControl(null),
      TK: new FormControl(null),
      PZP: new FormControl(null)
    });
  }

  private naplnForm(auto: Auto): void {
    this.form.controls['id'].setValue(auto.id);
    this.form.controls["cena"].setValue(auto.cena);
    this.form.controls["dvere"].setValue(auto.dvere);
    this.form.controls["osoby"].setValue(auto.osoby);
    this.form.controls["kufor"].setValue(auto.kufor);
    this.form.controls["bezpecnost"].setValue(auto.bezpecnost);
    this.form.controls["EK"].setValue(auto.EK);
    this.form.controls["TK"].setValue(auto.TK);
    this.form.controls["PZP"].setValue(auto.PZP);
  }

  public pridaj(): void {
    this.pridajAuto.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravAuto.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }

}
