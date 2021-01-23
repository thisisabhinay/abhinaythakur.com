/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "app-intro",
    templateUrl: "./intro.component.html",
    styleUrls: ["./intro.component.sass"]
})

export class IntroComponent implements OnInit {
    ctx: any;
    @ViewChild("canvas") canvas: ElementRef<HTMLCanvasElement>;

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewChecked(): void {
        console.log(this.canvas);
        this.ctx = this.canvas.nativeElement.getContext("2d");

        this.ctx.fillStyle = "#f1f4f7";
        this.ctx.fillRect(150, 50, 400, 400);
        this.ctx.clearRect(200, 200, 200, 200);
        this.ctx.strokeRect(250, 250, 150, 150);
    }
}
