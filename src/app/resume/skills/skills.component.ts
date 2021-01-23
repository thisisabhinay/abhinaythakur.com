/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-skills",
    templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.sass"]
})
export class SkillsComponent implements OnInit {
    @Input("data") data: unknown;
    @Input("feature") feature: string;
    @Input("index") index: string;
    @Input("layoutContext") layoutContext: string;
    constructor() { }

    ngOnInit(): void {
    }

}
