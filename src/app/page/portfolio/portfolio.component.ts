/* eslint-disable @typescript-eslint/no-empty-function */
import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { portfolio } from "../../portfolio";

@Component({
    selector: "app-portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrls: ["./portfolio.component.sass"]
})
export class PortfolioComponent implements OnInit {
    portfolio = portfolio;

    constructor(private viewPortScroller: ViewportScroller) { }

    ngOnInit(): void {
    }

    onClickScroll(elementId: string): void {
        this.viewPortScroller.scrollToAnchor(elementId);
    }
}
