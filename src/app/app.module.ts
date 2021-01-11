import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutMainComponent } from "./layout/layout-main/layout-main.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutMainComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
