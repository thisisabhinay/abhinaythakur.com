/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
    @Input("list") list: any[];
    @Input("feature") feature: string
    @Input("layoutContext") layoutContext: string

    constructor() { }

    ngOnInit(): void {
    }
}
