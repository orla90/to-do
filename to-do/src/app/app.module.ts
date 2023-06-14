import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoAppModule } from "./modules/to-do-app/to-do-app.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ToDoAppModule
    ]
})
export class AppModule { }
