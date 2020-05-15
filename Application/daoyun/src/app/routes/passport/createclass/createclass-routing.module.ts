import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateclassPage } from './createclass.page';

const routes: Routes = [
  {
    path: '',
    component: CreateclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateclassPageRoutingModule {}
