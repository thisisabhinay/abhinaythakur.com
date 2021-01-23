/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-list-skills",
    templateUrl: "./list-skills.component.html",
    styleUrls: ["./list-skills.component.sass"]
})
export class ListSkillsComponent implements OnInit {
    @Input("list") list: any[];
    constructor() { }

    ngOnInit(): void {
    }

}
