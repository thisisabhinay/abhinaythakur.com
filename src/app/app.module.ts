import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutMainComponent } from "./layout/layout-main/layout-main.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderTopComponent } from "./header/header-top/header-top.component";
import { IntroComponent } from "./intro/intro.component";
import { HomeComponent } from './page/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutMainComponent,
        NavbarComponent,
        HeaderTopComponent,
        IntroComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
