/* eslint-disable @typescript-eslint/no-empty-function */
import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.sass"]
})
export class NavbarComponent implements OnInit {

    constructor(private viewPortScroller: ViewportScroller) { }

    ngOnInit(): void {
    }

    onClickScroll(elementId: string): void {
        this.viewPortScroller.scrollToAnchor(elementId);
    }

}
