import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutMainComponent } from "./layout/layout-main/layout-main.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderTopComponent } from "./header/header-top/header-top.component";
import { IntroComponent } from "./intro/intro.component";
import { HomeComponent } from "./page/home/home.component";
import { LabelValueComponent } from "./label-value/label-value.component";
import { SocialIconsComponent } from "./social-icons/social-icons.component";
import { HeaderSectionComponent } from "./header/header-section/header-section.component";
import { PortfolioComponent } from "./page/portfolio/portfolio.component";
import { CardComponent } from "./card/card.component";
import { ListComponent } from "./list/list.component";

@NgModule({
    declarations: [
        AppComponent,
        LayoutMainComponent,
        NavbarComponent,
        HeaderTopComponent,
        IntroComponent,
        HomeComponent,
        LabelValueComponent,
        SocialIconsComponent,
        HeaderSectionComponent,
        PortfolioComponent,
        CardComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
