import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReInitialisationPage } from './re-initialisation.page';

const routes: Routes = [
  {
    path: '',
    component: ReInitialisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReInitialisationPageRoutingModule {}
