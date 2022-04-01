export class Auto {
  id?: number;
  cena: string;
  dvere: number;
  osoby: number;
  kufor: string;
  bezpecnost: string;
  EK: Date;
  TK: Date;
  PZP: Date;

  constructor(auto: Auto) {
    this.id = auto.id;
    this.cena = auto.cena;
    this.dvere = auto.dvere;
    this.osoby = auto.osoby;
    this.kufor = auto.kufor;
    this.bezpecnost= auto.bezpecnost;
    this.EK = auto.EK;
    this.TK = auto.TK;
    this.PZP = auto.PZP;
  }
}

export class AutoZoznam {
  id?: number;
  price: string;
  doors: number;
  persons: number;
  lug_boot: string;
  safety: string;
  EKEndDate: Date;
  TKEndDate: Date;
  PZPEndDate: Date;

  constructor(auto: AutoZoznam) {
    this.id = auto.id;
    this.price = auto.price;
    this.doors = auto.doors;
    this.persons = auto.persons;
    this.lug_boot = auto.lug_boot;
    this.safety= auto.safety;
    this.EKEndDate = auto.EKEndDate;
    this.TKEndDate = auto.TKEndDate;
    this.PZPEndDate = auto.PZPEndDate;
  }
}
