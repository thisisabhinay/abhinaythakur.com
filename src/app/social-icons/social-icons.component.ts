/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";
import { resume } from "../resume";

@Component({
    selector: "app-social-icons",
    templateUrl: "./social-icons.component.html",
    styleUrls: ["./social-icons.component.sass"]
})
export class SocialIconsComponent implements OnInit {
    contact = resume.contact[0];

    constructor() { }

    ngOnInit(): void {

    }

}
