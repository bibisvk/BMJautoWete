import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AutoStrankaComponent} from "./auto-stranka/auto-stranka.component";
import {CustomersStrankaComponent} from "./customers-stranka/customers-stranka.component";
import {BorrowingStrankaComponent} from "./borrowing-stranka/borrowing-stranka.component";

const routes: Routes = [
  {
    path: 'auto',
    component: AutoStrankaComponent
  },
  {
    path: 'customer',
    component: CustomersStrankaComponent
  },
  {
    path: 'borrowing',
    component: BorrowingStrankaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
