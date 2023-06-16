import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDividerPageRoutingModule } from './item-divider-routing.module';

import { ItemDividerPage } from './item-divider.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDividerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ItemDividerPage]
})
export class ItemDividerPageModule {}
