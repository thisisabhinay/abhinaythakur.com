/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";
import { resume } from "../../resume";
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
    resume = resume;
    resumeFeatures = Object.keys(this.resume);

    constructor() { }

    ngOnInit(): void {
        console.log(resume);
        console.log(Object.keys(resume));
    }

    print(d): string {
        return JSON.stringify(d);
    }

    getObjectKeys(obj: any): Array<string> {
        return Object.keys(obj);
    }
}
