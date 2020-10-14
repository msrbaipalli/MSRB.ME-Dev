import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MaterialModule } from './material.module';

@NgModule({
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        TooltipModule,
        BsDropdownModule,
        ModalModule
    ],
    imports: [
        TooltipModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot()
    ]
})
export class SharedModule { }