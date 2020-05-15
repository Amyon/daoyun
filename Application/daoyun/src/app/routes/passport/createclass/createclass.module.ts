import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateclassPageRoutingModule } from './createclass-routing.module';

import { CreateclassPage } from './createclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateclassPageRoutingModule
  ],
  declarations: [CreateclassPage]
})
export class CreateclassPageModule {}
