import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutMainComponent } from "./layout/layout-main/layout-main.component";
import { HomeComponent } from "./page/home/home.component";
import { PortfolioComponent } from "./page/portfolio/portfolio.component";

const routes: Routes = [{
    path: "",
    component: LayoutMainComponent,
    children: [
        {
            path: "",
            component: HomeComponent
        }, {
            path: "portfolio",
            component: PortfolioComponent
        }]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: "enabled"
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
