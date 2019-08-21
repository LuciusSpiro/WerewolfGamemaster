import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { KartenSpeicherService } from "~/app/kartenSpeicher/karten-speicher.service";
import { Ikarten } from "~/app/interface/iKarten";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "KartenDetail",
    moduleId: module.id,
    templateUrl: "./karten-detail.component.html"
})

export class KartenDetailComponent implements OnInit {
    name: string;
    path: string;
    text: string;
    karte: Ikarten;
    gesinnung: string;
    constructor(
        private _route: ActivatedRoute, 
        private kartenSpeicher: KartenSpeicherService, 
        private routerExtensions: RouterExtensions
        ) { }

    ngOnInit(): void {
        this.name = this._route.snapshot.params.id;
        let karten = this.kartenSpeicher.getAllCards();
        console.log(this.name);
        for (let k of karten) {
            console.log(k.name);
            if (this.name === k.name) {
                this.karte = k;
                console.log(k);
            }
        }
        if (this.karte.gut) {
            this.gesinnung = "gute";
        } else {
            this.gesinnung = "böse";
        }
        this.path = this.karte.path;
        this.text = this.karte.text;
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
