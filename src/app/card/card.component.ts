/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.sass"]
})
export class CardComponent implements OnInit {
    @Input("title") title: string;
    @Input("description") description: string;

    constructor() { }

    ngOnInit(): void {
    }

}
