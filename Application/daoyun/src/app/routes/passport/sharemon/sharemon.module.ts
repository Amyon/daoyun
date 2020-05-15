import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharemonPageRoutingModule } from './sharemon-routing.module';

import { SharemonPage } from './sharemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharemonPageRoutingModule
  ],
  declarations: [SharemonPage]
})
export class SharemonPageModule {}
