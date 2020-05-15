import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharemonPage } from './sharemon.page';

const routes: Routes = [
  {
    path: '',
    component: SharemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharemonPageRoutingModule {}
