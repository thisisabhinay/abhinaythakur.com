/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-education",
    templateUrl: "./education.component.html",
    styleUrls: ["./education.component.sass"]
})
export class EducationComponent implements OnInit {
    @Input("data") data: unknown;
    @Input("feature") feature: string;
    @Input("index") index: string;
    @Input("layoutContext") layoutContext: string;

    constructor() { }

    ngOnInit(): void {
    }

    print(d): string {
        return JSON.stringify(d);
    }

}
