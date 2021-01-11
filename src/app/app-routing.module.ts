import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutMainComponent } from "./layout/layout-main/layout-main.component";

const routes: Routes = [{
    path: "",
    component: LayoutMainComponent,
    children: []
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
