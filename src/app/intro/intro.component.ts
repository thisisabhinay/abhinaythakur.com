/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "app-intro",
    templateUrl: "./intro.component.html",
    styleUrls: ["./intro.component.sass"]
})

export class IntroComponent implements OnInit {
    @ViewChild("videoPlayer") videoPlayer: ElementRef<HTMLVideoElement>;

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        if (this.videoPlayer.nativeElement.paused) {
            this.videoPlayer.nativeElement.muted = true;
            this.videoPlayer.nativeElement.play();
        }
    }
}
