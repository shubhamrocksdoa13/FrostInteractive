import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { StudiosRoutingModule } from './studios-routing.module';
import { StudiosComponent } from './studios.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SelectDropDownModule } from 'ngx-select-dropdown'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudiosRoutingModule,
    SelectDropDownModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  declarations: [StudiosComponent]
})
export class StudiosModule { }
