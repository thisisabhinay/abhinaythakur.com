/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-header-section",
    templateUrl: "./header-section.component.html",
    styleUrls: ["./header-section.component.sass"]
})
export class HeaderSectionComponent implements OnInit {
    @Input("title") title: string;

    constructor() { }

    ngOnInit(): void {
    }

}
