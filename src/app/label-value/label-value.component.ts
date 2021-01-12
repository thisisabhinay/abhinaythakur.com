/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-label-value",
    templateUrl: "./label-value.component.html",
    styleUrls: ["./label-value.component.sass"]
})
export class LabelValueComponent implements OnInit {
    @Input("label") label: string;
    @Input("value") value: string;

    constructor() { }

    ngOnInit(): void {
    }

}
