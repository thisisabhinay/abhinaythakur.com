/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.sass"]
})
export class ContactComponent implements OnInit {
    @Input("data") data: unknown;
    @Input("feature") feature: string;
    @Input("layoutContext") layoutContext: string;

    constructor() { }

    ngOnInit(): void {
    }

}
