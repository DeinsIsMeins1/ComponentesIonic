import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconPageRoutingModule } from './icon-routing.module';

import { IconPage } from './icon.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IconPage]
})
export class IconPageModule {}
