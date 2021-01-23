/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-experience",
    templateUrl: "./experience.component.html",
    styleUrls: ["./experience.component.sass"]
})
export class ExperienceComponent implements OnInit {
    @Input("data") data: unknown;
    @Input("feature") feature: string;
    @Input("layoutContext") layoutContext: string;

    constructor() { }

    print(d): string {
        return JSON.stringify(d);
    }

    ngOnInit(): void {
    }

}
