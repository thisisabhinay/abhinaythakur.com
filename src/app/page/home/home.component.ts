/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";
import { resume } from "../../page/home/data";
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        console.log(resume);
    }

}
