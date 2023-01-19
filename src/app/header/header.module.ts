import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
})
export class HeaderModule {}
