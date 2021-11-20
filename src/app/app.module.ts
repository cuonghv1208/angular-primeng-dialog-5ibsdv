import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { TableModule } from 'primeng/table'
import { DialogModule } from 'primeng/dialog'
import { DynamicdialogComponent } from './dynamicdialog/dynamicdialog.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ConfirmDialogModule, BrowserAnimationsModule, DialogModule, TableModule ],
  declarations: [ AppComponent, HelloComponent, DynamicdialogComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ConfirmationService ]
})
export class AppModule { }
