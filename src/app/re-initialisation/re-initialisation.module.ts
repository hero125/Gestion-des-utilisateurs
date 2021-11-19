import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReInitialisationPageRoutingModule } from './re-initialisation-routing.module';

import { ReInitialisationPage } from './re-initialisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReInitialisationPageRoutingModule
  ],
  declarations: [ReInitialisationPage]
})
export class ReInitialisationPageModule {}
