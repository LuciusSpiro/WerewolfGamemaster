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
        this.karte = this.kartenSpeicher.getAllCards().find((karte) => karte.name === this.name);
        this.gesinnung = this.karte.gut ? "gute" : "böse";
        
        this.path = this.karte.path;
        this.text = this.karte.text;
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
