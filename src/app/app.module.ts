import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMain } from './app.main';

@NgModule({
    declarations: [
        AppMain
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppMain]
})
export class AppModule { }
