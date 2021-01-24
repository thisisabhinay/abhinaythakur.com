/* eslint-disable @typescript-eslint/no-empty-function */
import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.sass"]
})
export class FooterComponent implements OnInit {

    constructor(private viewPortScroller: ViewportScroller) { }

    ngOnInit(): void {
    }

    scrollToTop(): void {
        this.viewPortScroller.scrollToPosition([0, 0]);
    }

}
