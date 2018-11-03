import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MpostPage } from './mpost';

@NgModule({
  declarations: [
    MpostPage,
  ],
  imports: [
    IonicPageModule.forChild(MpostPage),
  ],
})
export class MpostPageModule {}
