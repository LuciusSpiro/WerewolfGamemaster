import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "KartenDetail",
    moduleId: module.id,
    templateUrl: "./karten-detail.component.html"
})

export class KartenDetailComponent implements OnInit {

    constructor(private _route: ActivatedRoute) { }

    ngOnInit(): void {
        console.log(this._route.snapshot.params.id);
    }
}
