/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-experience-item",
    templateUrl: "./experience-item.component.html",
    styleUrls: ["./experience-item.component.sass"]
})
export class ExperienceItemComponent implements OnInit {
    @Input("data") data: any;
    @Input("index") index: string;
    @Input("layoutContext") layoutContext: string;

    constructor() { }

    ngOnInit(): void {

    }

    print(d): string {
        return JSON.stringify(d);
    }
}
